var DynamoDriver = require('./DynamoDriver')
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var PayLoadFormator = require('./PayLoadFormator');

exports.handler = (event, context, callback) => {
    
    var client = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    var DriverOb = new DynamoDriver();
    var formatorOb  = new PayLoadFormator();
    
    formatorOb.Collector((err,data)=>{
        if(err){
            console.log(err)
            callback(err, null);
        
        }else{
            var payload= formatorOb.Formator(JSON.parse(data),"INDIA_AQIDATA_TECHGIG");
            
            var payloadFull = payload.RequestItems.INDIA_AQIDATA;
            
            // console.log("FORMATED DATA",JSON.stringify(payload));
            
            var chunks = [];
            console.log("PAYLOAD SIZE: "+ payloadFull.length);
            payloadFull.forEach(function(item){
               
               chunks.push(item);
               if(chunks.length >= 25) {
                   
                   payload.RequestItems.INDIA_AQIDATA = chunks;
                   insertEntries(client,payload);
                   chunks = [];
                   
               }
            });
            
            if(chunks.length > 0) {
               payload.RequestItems.INDIA_AQIDATA = chunks;
                insertEntries(client,payload);
                       
            }
            
        }
    });
    
    
    function insertEntries(client,payload) {
        
        console.log("INSERT ENTRIES: "+ payload.RequestItems.INDIA_AQIDATA.length);
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
    
    
};
