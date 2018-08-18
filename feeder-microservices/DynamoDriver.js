// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

class DynamoDriver{
    
    constructor(){

    }
    
    
    SearchDb(client,params,callback){
        
        client.get(params,(err,data)=>{
            if(err){
                callback(err,null);
            }else{
                callback(null,data);
            }
        });
        
    }
    
   
   addDocument(client,params,callback){
       
       client.put(params,(err,data)=>{
           if(err){
               callback(err,null);
           }else{
               callback(null,data);
           }
       })
   }
   
   
   RunQuery(client,params,callback){
       
       client.query(params,(err,data)=>{
           
           if(err){
               callback(err,null);
           }else{
               callback(null,data);
           }
           
       })
       
   }
   
   WriteMultiple(client,params,callback){
    //   console.log(client);
      client.batchWrite(params,(err,data)=>{
         
         if (err){
           console.log(err, err.stack);
           callback(err,null);
         }  // an error occurred
         else {
            //  console.log(data);
             callback(null,data)
             }       
         
          
      });
       
       
   }
    

}

module.exports =DynamoDriver;