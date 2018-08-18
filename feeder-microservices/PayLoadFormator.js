var request = require('request');


class PayLoadFormater{
    
    constructor(){
        
        this.url = "https://api.openaq.org/v1/latest";
        
    }
    
    
    Collector(callback){
        var options = { 
                method: 'GET',
                url: this.url,
                qs: { city: process.env.CITY },
            headers: {'Cache-Control': 'no-cache' } 
        };
        
        request(options, function (error, response, body) {
          
            if(error){
                
                console.log("ERROR IN GETTING DATA");
                callback(error,null);

                }else{
                    
                    console.log("GOT DATA FROM SORCE");
                    callback(null,body);    
                
                    
                }        
        });
        
    }
    
    static Randomizer(min, max) {
        return parseFloat(Math.random() * (max - min + 1) + min).toFixed(2);
    }
    
    Formator(data,tablename){
        
        var time= Date.now();
        var timeString = new Date(Date.now()).toString();
        var records=[];
        console.log("TABLENAME:",tablename)
        console.log(timeString);
        // console.log(data);
        data.results.forEach(function(element){
            var randomCO, randomO3, randomNO2, randomSO2, randomPM10, randomPM25;
            if(element.hasOwnProperty('coordinates')){
            element.measurements.forEach(function(subElement){
                if(subElement.parameter=='no2'){ randomNO2 = PayLoadFormater.Randomizer(subElement.value+3,subElement.value-3);}
                else if(subElement.parameter=='so2'){ randomSO2 = PayLoadFormater.Randomizer(subElement.value+3,subElement.value-3);}
                else if(subElement.parameter=='pm25'){ randomPM25 = PayLoadFormater.Randomizer(subElement.value+3,subElement.value-3);}
                else if(subElement.parameter=='pm10'){randomPM10 = PayLoadFormater.Randomizer(subElement.value+3,subElement.value-3);}
                else if(subElement.parameter=='o3'){randomO3 =    PayLoadFormater.Randomizer(subElement.value+3,subElement.value-3);}
                else if(subElement.parameter=='co'){randomCO = PayLoadFormater.Randomizer(subElement.value+3,subElement.value-3);}
    
            });
    
            if(!randomNO2){randomNO2=false}
            if(!randomCO){randomCO=false}
            if(!randomO3){randomO3=false}
            if(!randomPM10){randomPM10=false}
            if(!randomPM25){randomPM25=false}
            if(!randomSO2){randomSO2=false}
            var subJson = {
                'PutRequest':{
                    'Item':{
                        'id':time+element.location,
                        'timestamp':time,
                        'location':element.location,
                        'city':element.city,
                        'country':element.country,
                        'co':randomCO,
                        'pm25':randomPM25,
                        'no2':randomNO2,
                        'o3':randomO3,
                        'so2':randomSO2,
                        'lat':element.coordinates.latitude,
                        'long':element.coordinates.longitude,
                        'time':timeString
                        
                    }
    
                }
            }
        
        records.push(subJson);
            }
      });
      
      
      var formatedPayload ={
          'RequestItems':{
              "INDIA_AQIDATA_TECHGIG":records
          }
      }
            
    return formatedPayload;
    
        
    }

}

module.exports = PayLoadFormater;
