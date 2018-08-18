'use strict';
//dependencies.

//=======================================HANDLER FUNCTION FOR AWS LAMBDA SERVERLESS=====================================
//handler function for AWS Lambda
var AWS = require("aws-sdk");
var LatestData = require('./latest');
var AQICalculator = require('./AirQualityMeasurer');
var latestOb = new LatestData();
var aqiOb = new AQICalculator();

exports.handler = (event, context, callback) => {
   
    //console.log(JSON.stringify(event));
    
    router(event,(err,response)=>{
        
        if(err == null){

            callback(null, {"statusCode":200,
              headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true },
                "body":JSON.stringify(response)});
        }else{
            callback(err, null);
        }
        
    });

};

function router(event,callback){
  
    if(event.path == "/"){
      if(event.httpMethod == "GET"){

        callback(null,responseFormator(event,404,{},true,"Try our /health or /latest endpoint"));
      }

    }
    else if(event.path == "/latest" && event.httpMethod == "GET"){
      if(event.queryStringParameters==null || event.queryStringParameters==undefined){
        latestOb.GetLatestData(null, null, null, (err, result)=>{
            if(err == null ){
              console.log("No. of records : " + result.totalItems);
              if(result.totalItems == 0){
                console.log("No records!");
                callback(null,responseFormator(event,404,result,true,"There are no sensors for this city. We currently only support tier 3 cities of: Kolkata, Delhi, Bengaluru, Pune and Mumbai!"));   
              }
              else{
                console.log("records exist");
                callback(null,responseFormator(event,200,result,false,"latest results"));   
              }
               
              
            }else{
    
              callback(null,responseFormator(event,500,err,true,"internal error"));                
            }
          });
      }
      else{
        if(event.queryStringParameters.hasOwnProperty('city')){
          let query = event.queryStringParameters.city.toLowerCase();
          
          latestOb.GetLatestData(query.charAt(0).toUpperCase() + query.slice(1), null, null, (err, result)=>{
            if(err == null ){
              
              callback(null,responseFormator(event,200,result,false,"latest results")); 
              
            }else{
    
              callback(null,responseFormator(event,500,err,true,"internal error"));                
            }
          });
        }
        else{
          callback(null,responseFormator(event,500,{},true,"Please put query string as 'city' in headers"));
        }
      }
          
    }
    
    else if(event.path == "/history" && event.httpMethod == "GET"){
      if(event.queryStringParameters==null || event.queryStringParameters==undefined){
      //   console.log(JSON.stringify(event));
      // console.log("Query parameters absent completely!");
        // latestOb.GetLatestData(null, null, null, (err, result)=>{
        //     if(err == null ){
              
        //       callback(null,responseFormator(event,200,result,false,"latest results"));    
              
        //     }else{
    
        //       callback(null,responseFormator(event,500,err,true,"internal error"));                
        //     }
        //   });
        callback(null,responseFormator(event,500,{},true,"You have to mention the date range. Please pass both, 'since' date and 'until' date in (YYYY-MM-DD 24:00:00) Format."));
      }
      else{
        console.log("Query string parameters : " + JSON.stringify(event.queryStringParameters));
        if(!event.queryStringParameters.hasOwnProperty('until') && !event.queryStringParameters.hasOwnProperty('since')){
          callback(null,responseFormator(event,500,{},true,"Please pass both, 'since' date and 'until' date in (YYYY-MM-DD 24:00:00) Format."));
        }
        // else if(!event.queryStringParameters.hasOwnProperty('until')){
        //   callback(null,responseFormator(event,500,{},true,"Please pass both, 'since' date and 'until' date in (YYYY-MM-DD 24:00:00) Format."));
        // }
        else if(event.queryStringParameters.hasOwnProperty('until') && event.queryStringParameters.hasOwnProperty('since') && !event.queryStringParameters.hasOwnProperty('city')){
          latestOb.GetLatestData(null, event.queryStringParameters.since, event.queryStringParameters.until, (err, result)=>{
            if(err == null ){
              
              callback(null,responseFormator(event,200,result,false,"latest results on country level"));    
              
            }else{
    
              callback(null,responseFormator(event,500,err,true,"internal error"));                
            }
          });
        }
        else if(event.queryStringParameters.hasOwnProperty('until') && event.queryStringParameters.hasOwnProperty('since') && event.queryStringParameters.hasOwnProperty('city')){
          
          let query = event.queryStringParameters.city.toLowerCase();
          
          
          latestOb.GetLatestData(query.charAt(0).toUpperCase() + query.slice(1), event.queryStringParameters.since, event.queryStringParameters.until, (err, result)=>{
            if(err == null ){
              
              callback(null,responseFormator(event,200,result,false,"latest results on city level"));    
              
            }else{
    
              callback(null,responseFormator(event,500,err,true,"internal error"));                
            }
          });
        }
        else{
          console.log("Exception : " + JSON.stringify(event.queryStringParameters));
          callback(null,responseFormator(event,500,{},true,"Please pass both, 'since' date and 'until' date in (YYYY-MM-DD 24:00:00) Format."));
        }
      }
          
    }
    
    else if(event.path == "/health"){
      if(event.httpMethod=='POST'){
        if(event.body==null || event.body==undefined){
          callback(null,responseFormator(event,500,{},true,"There is no body you have sent to calculate"));
        }
        else{
          
          var total = [0,0,0,0,0,0];
          var count =0;
          //console.log(typeof(JSON.parse(event.body)));
          JSON.parse(event.body).readings.forEach(function(element){
            count+=1;
            if(element.hasOwnProperty('co')){
              aqiOb.CalculateAQI('co',element.co,(result)=>{
                total[0]=result;
              });
            }
            if(element.hasOwnProperty('so2')){
              aqiOb.CalculateAQI('so2',element.so2,(result)=>{
                total[1]=result;
              });
            }
            if(element.hasOwnProperty('no2')){
              aqiOb.CalculateAQI('no2',element.no2,(result)=>{
                total[2]=result;
              });
            }
            if(element.hasOwnProperty('o3')){
              aqiOb.CalculateAQI('o3',element.o3,(result)=>{
                total[3]=result;
              });
            }
            if(element.hasOwnProperty('pm25')){
              aqiOb.CalculateAQI('pm25',element.pm25,(result)=>{
                total[4]=result;
              });
            }
            if(element.hasOwnProperty('pm10')){
              aqiOb.CalculateAQI('pm10',element.pm10,(result)=>{
                total[5]=result;
              });
            }
          
          });
          
          for(var i=0;i<total.length;i++){
            total[i]=parseFloat(total[i]/count).toFixed(2);
          }
          
          
          total  =  Math.max.apply( null, Object.keys( total ).map(function ( key ) { return total[key] }) );
          aqiOb.CalculateSuggestions(total,(result)=>{
            var data = {
              aqi:total,
              recommendations:result
            };
            callback(null,responseFormator(event,200,data,false,"Health recommendations"));    
          });

        }
      }
      else if(event.httpMethod=='GET'){
        if(event.queryStringParameters==null || event.queryStringParameters==undefined){
            callback(null,responseFormator(event,500,{},true,"You need to put query string as 'aqi'"));
          }
          else{
              if(event.queryStringParameters.hasOwnProperty('aqi')){
                if(event.queryStringParameters.aqi<0||event.queryStringParameters.aqi>500){
                  callback(null,responseFormator(event,500,{},true,"As per standardized regulations, 'aqi' should be between 0 and 500"));
                }
                else{
                   aqiOb.CalculateSuggestions(event.queryStringParameters.aqi,(result)=>{
                    callback(null,responseFormator(event,200,result,false,"Health recommendations"));    
                  });
                }
            }
            else{
              callback(null,responseFormator(event,500,{},true,"Please put query string as 'aqi' in query parameters"));
            }
          }
      }
    }
    
    else if(event.path == "/auth" && event.httpMethod == "POST"){
      GenerateToken(event, (err, data)=>{
        if(err == null ){
          
          callback(null,responseFormator(event,200,data,false,"Use this authentication token"));    
          
        }else{

          callback(null,responseFormator(event,500,err,true,"internal server error"));                
        }
      });
      
    }

  }
  
  function GenerateToken(callback){
    var apigateway = new AWS.APIGateway();
    var params = {
      
      customerId: 'allaijeriae',
      description: 'Use this token to use our APIs',
      enabled: true,
      generateDistinctId: true ,
      name: 'AQIDATA Key',
      value: 'lolololo'
    };
    apigateway.createApiKey(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);  
      callback(err, data);// successful response
    });
  }
    

   function responseFormator(event,statusCode,payload,isError,message){
      var response;
      if(event.path=='/'){
        if(event.httpMethod=='GET'){
          response={
            method:event.httpMethod,
            status:statusCode,
            error:isError,
            message:message
          };
        }
      }
      
      else if(event.path == "/health"){
        response={
            method:event.httpMethod,
            status:statusCode,
            recommendations:payload,
            error:isError,
            message:message
          };
      }
        
      else if(event.path == "/latest" && event.httpMethod == "GET"){
        response={
            method:event.httpMethod,
            status:statusCode,
            results:payload,
            error:isError,
            message:message
          };
      }
      
      else if(event.path == "/history" && event.httpMethod == "GET"){
        response={
            method:event.httpMethod,
            status:statusCode,
            results:payload,
            error:isError,
            message:message
          };
      }
      
      else if(event.path == "/auth" && event.httpMethod == "POST"){
        response={
            method:event.httpMethod,
            status:statusCode,
            token:payload,
            error:isError,
            message:message
          };
    }
    
    return response;

  }
  


