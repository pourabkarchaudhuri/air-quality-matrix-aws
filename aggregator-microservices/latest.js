// var DynamoDriver = require('./DynamoDriver')
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// var PayLoadFormator = require('./PayLoadFormator');
var aqiC = require('./AirQualityMeasurer');

class Latest{

    constructor(){
        console.log("Latest object created");
    }

    GetLatestData(query, since, until, callback){
    var aqi = new aqiC();

    var client = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    // var DriverOb = new DynamoDriver();
    
    //adding in data from PayloadFormator 
   /* var formatorOb  = new PayLoadFormator();
    
    formatorOb.Collector((err,data)=>{
        if(err){
            console.log(err)
            callback(err, null);
        
        }else{
            var payload= formatorOb.Formator(JSON.parse(data),"INDIA_AQIDATA");
            console.log("FORMATED DATA",payload);
                
            DriverOb.WriteMultiple(client,payload,(err,result)=>{
                if(err){
                    console.log(err);
                    callback(err,null);
                }else{
                    console.log(result);
                    callback(null, "success");
                }
            });
           
            
        }
    });*/
    
    
    var sinceOpt = Date.now() - 1*60000; //replace this with query params, else default to 1
    var untilOpt = Date.now();
    console.log("Query : " + query + ", Since : " + since + ", Until : " + until);
    var cityName="";
    
    if(query){

            cityName = query;

    }
    
    if(since) {
        sinceOpt = new Date(since).getTime();
    }
    
    if(until) {
        untilOpt = new Date(until).getTime();
    }
    
     //replace with query param
    

    var expAttrVals = {
        ":s": sinceOpt,
        ":u": untilOpt
    };
    
    var filterExp = '#time_stamp > :s AND #time_stamp < :u';
    
    if(cityName != "") {
        expAttrVals[":a"] = cityName;
        filterExp = 'city = :a AND #time_stamp > :s AND #time_stamp < :u';
    }


    // console.log("FILTEREXP: "+ filterExp);
    // console.log("expAttrVals");
    // console.log(expAttrVals);
    
    var params = {
        TableName: process.env.TABLENAME,
        FilterExpression: filterExp,
        ExpressionAttributeValues: expAttrVals,
        ExpressionAttributeNames: {
            "#time_stamp": "timestamp"
          },
        Segment: 1,
        TotalSegments: 5
   
  
    };
 
 
    /*
    query block::: UNCOMMENT THIS SECTION, COMMENT ABOVE AND CHANGE SCAN TO QUERY DOWN
        var expAttrVals = {
        ":s": sinceOpt,
        // ":u": untilOpt,
        //":c": "IN"
    };
    
   // var filterExp = '#time_stamp > :s AND #time_stamp < :u AND country = :c';
    var filterExp = '#time_stamp > :s AND country = :c';
    
    if(cityName != "") {
        expAttrVals[":a"] = cityName;
        //filterExp = 'city = :a AND #time_stamp > :s AND #time_stamp < :u AND country = :c';
        filterExp = 'city = :a AND #time_stamp > :s';
    }


    // console.log("FILTEREXP: "+ filterExp);
    // console.log("expAttrVals");
    // console.log(expAttrVals);
    
    var params = {
        TableName: "INDIA_AQIDATA",
        //FilterExpression: filterExp,
        IndexName: "city-index",
        KeyConditionExpression: filterExp,
        ExpressionAttributeValues: expAttrVals,
        ExpressionAttributeNames: {
            "#time_stamp": "timestamp"
          }
   
  
    };
    */
    var items = [];
    var iterations = 0;
    var scanExecute = function(sparams, callback) {
        
       // console.log("scanExecute called >>> "+ items.length);
        iterations++;
        client.scan(sparams,function(err,result) {
            if(err) {
                callback(err);
            } else {
               // console.log("SUCCESS  >>>> ");
            
                
                items = items.concat(result.Items);
                if(result.LastEvaluatedKey) {
                    sparams.ExclusiveStartKey = result.LastEvaluatedKey;
                    scanExecute(sparams, callback);
                } else {
                    processItems(callback,items, iterations);
                }
            }
        });
    };
    
    
    var totalSegments = 10;

    for (var seg = 0;  seg < totalSegments; seg++) {
        
        scanExecute({
            TableName: "INDIA_AQIDATA",
            FilterExpression: filterExp,
            ExpressionAttributeValues: expAttrVals,
            ExpressionAttributeNames: {
                "#time_stamp": "timestamp"
              },
            Segment: seg,
            TotalSegments: totalSegments
      
        },callback);
    }
    
      
    
    var cbCount = 0;
    function processItems(callback, items, iterations) {
        cbCount++;
        
        if(cbCount == totalSegments) {
            processItemsInner(callback, items, iterations);
        }
        
    }

    function processItemsInner(callback, items, iterations) {
        
        console.log("processItems called >>>> "+ items.length);
        
        var processedSensor = [];
        
        var responseArr = {
                        "iterations": iterations,
                        "totalSensors": 0,
                       "totalItems" : 0,
                        "measurements": {
                            "no2": 0,
                            "so2": 0,
                            "co": 0,
                            "o3": 0,
                            "pm25": 0,
                            "pm10": 0
                        },
                        "meaurementCounts": {
                            "no2": 0,
                            "so2": 0,
                            "co": 0,
                            "o3": 0,
                            "pm25": 0,
                            "pm10": 0
                        },
                        "aqi": {
                            "no2": 0,
                            "so2": 0,
                            "co": 0,
                            "o3": 0,
                            "pm25": 0,
                            "pm10": 0
                        },
                        "concentration": {
                            "no2": 0,
                            "so2": 0,
                            "co": 0,
                            "o3": 0,
                            "pm25": 0,
                            "pm10": 0
                        },
                        "sensors": []
                        
                    }
                    
                    if(items.length > 0) {
                       items.forEach(function(item){
                            
                            if(processedSensor.indexOf(item.location) == -1) {
                                processedSensor.push(item.location);
                                responseArr.sensors.push({
                                   "name": item.location,
                                   "city": item.city,
                                   "lat": item.lat,
                                   "long": item.long,
                                   "items": 0,
                                   "measurements": {
                                        "no2": 0,
                                        "so2": 0,
                                        "co": 0,
                                        "o3": 0,
                                        "pm25": 0,
                                        "pm10": 0
                                    },
                                    "meaurementCounts": {
                                        "no2": 0,
                                        "so2": 0,
                                        "co": 0,
                                        "o3": 0,
                                        "pm25": 0,
                                        "pm10": 0
                                    },
                                    "aqi": {
                                        "no2": 0,
                                        "so2": 0,
                                        "co": 0,
                                        "o3": 0,
                                        "pm25": 0,
                                        "pm10": 0
                                    },
                                    "concentration": {
                                        "no2": 0,
                                        "so2": 0,
                                        "co": 0,
                                        "o3": 0,
                                        "pm25": 0,
                                        "pm10": 0
                                    }
                        
                                });
                            }
                            
                            var sensorPos = processedSensor.indexOf(item.location);
                            
                            responseArr.sensors[sensorPos].items++;
                            
                            if(item.no2){
                                responseArr.meaurementCounts.no2++;
                                responseArr.measurements.no2 += parseFloat(item.no2);
                                
                                responseArr.sensors[sensorPos].meaurementCounts.no2++;
                                responseArr.sensors[sensorPos].measurements.no2 += parseFloat(item.no2);
                            }
                            
                            if(item.so2){
                                responseArr.meaurementCounts.so2++;
                                responseArr.measurements.so2 += parseFloat(item.so2);
                                
                                responseArr.sensors[sensorPos].meaurementCounts.so2++;
                                responseArr.sensors[sensorPos].measurements.so2 += parseFloat(item.so2);
                            }
                            
                            if(item.co){
                                responseArr.meaurementCounts.co++;
                                responseArr.measurements.co += parseFloat(item.co);
                                
                                responseArr.sensors[sensorPos].meaurementCounts.co++;
                                responseArr.sensors[sensorPos].measurements.co += parseFloat(item.co);
                            }
                            
                            if(item.o3){
                                responseArr.meaurementCounts.o3++;
                                responseArr.measurements.o3 += parseFloat(item.o3);
                                
                                responseArr.sensors[sensorPos].meaurementCounts.o3++;
                                responseArr.sensors[sensorPos].measurements.o3 += parseFloat(item.o3);
                            }
                            
                            if(item.pm25){
                                responseArr.meaurementCounts.pm25++;
                                responseArr.measurements.pm25 += parseFloat(item.pm25);
                                
                                responseArr.sensors[sensorPos].meaurementCounts.pm25++;
                                responseArr.sensors[sensorPos].measurements.pm25 += parseFloat(item.pm25);
                            }
                            
                            if(item.pm10){
                                responseArr.meaurementCounts.pm10++;
                                responseArr.measurements.pm10 += parseFloat(item.pm10);
                                
                                responseArr.sensors[sensorPos].meaurementCounts.pm10++;
                                responseArr.sensors[sensorPos].measurements.pm10 += parseFloat(item.pm10);
                            }
                        });
                        
                        
                        
                    }
                    
                    responseArr = parseMeasurements(responseArr);
                    
                    
                    
                    //processing sensors
                    if(responseArr.sensors.length > 0) {
                        
                        for(var i=0; i < responseArr.sensors.length; i++){
                            
                            responseArr.sensors[i] = parseMeasurements(responseArr.sensors[i]);
                
                        }
                        
                        responseArr.sensors.sort(function(a, b) {
                            return a.aqi < b.aqi;
                        });
                        
                        responseArr.strongestImpact = responseArr.sensors[0];
                    }
                    
                    responseArr.totalItems = items.length;
                    responseArr.totalSensors = responseArr.sensors.length;
                    
                    callback(null, responseArr);
   
    }
    
    
    function parseMeasurements(responseArr) {
        
        if(responseArr.measurements.no2){
                        
            responseArr.measurements.no2 = parseFloat(responseArr.measurements.no2/responseArr.meaurementCounts.no2).toFixed(2);
            
            aqi.CalculateAQI("no2", responseArr.measurements.no2, function(r){
                responseArr.aqi.no2 = r;
            });
            
            aqi.CalculatePollutantConcentration("no2", responseArr.measurements.no2, function(r){
                responseArr.concentration.no2 = r;
            });
            
        }
        
        
        if(responseArr.measurements.so2){
            responseArr.measurements.so2 = parseFloat(responseArr.measurements.so2/responseArr.meaurementCounts.so2).toFixed(2);
            aqi.CalculateAQI("so2", responseArr.measurements.so2, function(r){
                responseArr.aqi.so2 = r;
            });
            aqi.CalculatePollutantConcentration("so2", responseArr.measurements.so2, function(r){
                responseArr.concentration.so2 = r;
            });
            
        }
        
        
        if(responseArr.measurements.co){
            responseArr.measurements.co = parseFloat(responseArr.measurements.co/responseArr.meaurementCounts.co).toFixed(2);
            aqi.CalculateAQI("co", responseArr.measurements.co, function(r){
                responseArr.aqi.co = r;
            });
            aqi.CalculatePollutantConcentration("co", responseArr.measurements.co, function(r){
                responseArr.concentration.co = r;
            });
            
        }
        
        
        if(responseArr.measurements.o3){
            responseArr.measurements.o3 = parseFloat(responseArr.measurements.o3/responseArr.meaurementCounts.o3).toFixed(2);
            aqi.CalculateAQI("o3", responseArr.measurements.o3, function(r){
                responseArr.aqi.o3 = r;
            });
            aqi.CalculatePollutantConcentration("o3", responseArr.measurements.o3, function(r){
                responseArr.concentration.o3 = r;
            });
            
        }
        
        
        if(responseArr.measurements.pm25){
            responseArr.measurements.pm25 = parseFloat(responseArr.measurements.pm25/responseArr.meaurementCounts.pm25).toFixed(2);
            aqi.CalculateAQI("pm25", responseArr.measurements.pm25, function(r){
                responseArr.aqi.pm25 = r;
            });
            aqi.CalculatePollutantConcentration("pm25", responseArr.measurements.pm25, function(r){
                responseArr.concentration.pm25 = r;
            });
            
        }
        
        if(responseArr.measurements.pm10){
            responseArr.measurements.pm10 = parseFloat(responseArr.measurements.pm10/responseArr.meaurementCounts.pm10).toFixed(2);
            aqi.CalculateAQI("pm10", responseArr.measurements.pm10, function(r){
                responseArr.aqi.pm10 = r;
            });
            aqi.CalculatePollutantConcentration("pm10", responseArr.measurements.pm10, function(r){
                responseArr.concentration.pm10 = r;
            });
            
        }
        
        var arr = Object.keys( responseArr.aqi ).map(function ( key ) { return responseArr.aqi[key]; });
        
        responseArr.aqi =  Math.max.apply( null, arr );
        
        aqi.CalculateSuggestions(responseArr.aqi, function(suggestion){
            
            responseArr.suggestions = suggestion;
            
        });
        
        delete responseArr.meaurementCounts;
        
        return responseArr;
    }
        
  }
    
}

module.exports = Latest;


