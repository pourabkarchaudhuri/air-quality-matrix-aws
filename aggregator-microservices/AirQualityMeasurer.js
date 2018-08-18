var dataPoints = require("./dataSheet");
 

class AirQualityMeasurer{

    constructor(){
        console.log("AirQualityMeasurer object created");
    }

    CalculateAQI (parameter, concentration, callback) {
 
        var paramBreakpoints = dataPoints.breakpoints[parameter];
        var paramAqi = dataPoints.aqi[parameter];
        var iP = 0;
 
        for (var i = 0; i < paramBreakpoints.length; i++) {
            var arrBreakpointRange = paramBreakpoints[i].split('-');
            var bpLow = parseFloat(arrBreakpointRange[0]);
            var bpHigh = parseFloat(arrBreakpointRange[1]);
 
            if (concentration >= bpLow && concentration <= bpHigh) {
                var iLow = paramAqi[arrBreakpointRange[0]];
                var iHigh = paramAqi[arrBreakpointRange[1]];
                iP = Math.round((((iHigh - iLow) / (bpHigh - bpLow)) * (concentration - bpLow)) + iLow);
                break;
            }
        }
 
        callback(iP);
    }
 
    CalculateSuggestions (aqi, callback){
        var suggest;
        dataPoints.suggestions.forEach(function(element){
            if(aqi>=element.low && aqi<=element.high){
                suggest = {
                    health_effects:element.health_effects,
                    status:element.status,
                    precaution:element.precaution,
                    risk:element.risk
                };
    
            }
 
        });
        callback(suggest);
    }
 
    CalculatePollutantConcentration (pollutant, reading, callback){
        
        var elementBase = dataPoints.pollutant_standards[pollutant];
        var result = parseFloat((reading/elementBase)*100).toFixed(2);
        callback(result);
    }
}

module.exports = AirQualityMeasurer;
 
 


 
    