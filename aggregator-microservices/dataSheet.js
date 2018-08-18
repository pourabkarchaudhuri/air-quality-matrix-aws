var datapoints={

    breakpoints :{
        'co': ['0-1000', '1001-2000', '2001-10000', '10001-17000', '17001-34000'],
        'no2': ['0-40', '41-80', '81-180', '181-280', '281-400'],
        'pm25': ['0-30', '31-60', '61-90', '91-120', '121-250'],
        'so2': ['0-40', '41-80', '81-380', '381-800', '801-1600'],
        'pm10': ['0-50', '51-100', '101-250', '251-350', '351-430'],
        'o3': ['0-50', '51-100', '101-168', '169-208', '209-748'],
        'nh4': ['0-200', '201-400', '401-800', '801-1200', '1200-1800']
    },
    aqi : {
        'co': {
            '0': 0,
            '1000': 50,
            '1001': 51,
            '2000': 100,
            '2001': 101,
            '10000': 200,
            '10001': 201,
            '17000': 300,
            '17001': 301,
            '34000': 400,
            '34001': 401,
            'max': 500
        },
        'no2': {
            '0': 0,
            '40': 50,
            '41': 51,
            '80': 100,
            '81': 101,
            '180': 200,
            '181': 201,
            '280': 300,
            '281': 301,
            '400': 400,
            '401': 401,
            'max': 500
        },
        'pm25': {
            '0': 0,
            '30': 50,
            '31': 51,
            '60': 100,
            '61': 101,
            '90': 200,
            '91': 201,
            '120': 300,
            '121': 301,
            '250': 400,
            '251': 401,
            'max': 500
        },
        'so2': {
            '0': 0,
            '40': 50,
            '41': 51,
            '80': 100,
            '81': 101,
            '380': 200,
            '381': 201,
            '800': 300,
            '801': 301,
            '1600': 400,
            '1601': 401,
            'max': 500
        },
        'pm10': {
            '0': 0,
            '50': 50,
            '51': 51,
            '100': 100,
            '101': 101,
            '250': 200,
            '251': 201,
            '350': 300,
            '351': 301,
            '430': 400,
            '431': 401,
            'max': 500
        },
        'o3': {
            '0': 0,
            '50': 50,
            '51': 51,
            '100': 100,
            '101': 101,
            '168': 200,
            '169': 201,
            '208': 300,
            '209': 301,
            '748': 400,
            '749': 401,
            'max': 500
        },
        'nh4': {
            '0': 0,
            '200': 50,
            '201': 51,
            '400': 100,
            '401': 101,
            '800': 200,
            '801': 201,
            '1200': 300,
            '1201': 301,
            '1800': 400,
            '1801': 401,
            'max': 500
        }
    },
    suggestions : [
        {
            'low':0,
            'high':50,
            'health_effects':'No health implications.',
            'status':'good',
            'risk':'none',
            'precaution':'Everyone can continue their outdoor activities normally.'
        },{
            'low':51,
            'high':100,
            'health_effects':'Some pollutants may slightly affect very few hypersensitive individuals.',
            'status':'satisfactory',
            'risk':'low',
            'precaution':'Only very few hypersensitive people should reduce outdoor activities.'
        },{
            'low':101,
            'high':150,
            'health_effects':'Healthy people may experience slight irritations and sensitive individuals will be slightly affected to a larger extent.',
            'status':'moderate',
            'risk':'moderate',
            'precaution':'Children, seniors and individuals with respiratory or heart diseases should reduce sustained and high-intensity outdoor exercises.'
        },{
            'low':151,
            'high':200,
            'health_effects':'Sensitive individuals will experience more serious conditions. The hearts and respiratory systems of healthy people may be affected.',
            'status':'unhealthy',
            'risk':'high',
            'precaution':'Children, seniors and individuals with respiratory or heart diseases should avoid sustained and high-intensity outdoor exercises. General population should moderately reduce outdoor activities.'
        },{
            'low':201,
            'high':250,
            'health_effects':'May cause respiratory illness to the people on prolonged exposure. Effect may be more pronounced in people with lung and heart diseases.',
            'status':'poor',
            'risk':'very high',
            'precaution':'Children, seniors and individuals with heart or lung diseases should stay indoors and avoid outdoor activities. General population should reduce outdoor activities.'
        },{
            'low':251,
            'high':300,
            'health_effects':'Healthy people will commonly show symptoms. People with respiratory or heart diseases will be significantly affected and will experience reduced endurance in activities.',
            'status':'very poor',
            'risk':'extreme',
            'precaution':'Children, seniors and the sick should stay indoors and avoid physical exertion. General population should avoid outdoor activities.'
        },{
            'low':351,
            'high':500,
            'health_effects':'Healthy people will experience reduced endurance in activities and may also show noticeably strong symptoms. Other illnesses may be triggered in healthy people. Elders and the sick should remain indoors and avoid exercise. Healthy individuals should avoid outdoor activities.',
            'status':'severe',
            'risk':'hazardous',
            'precaution':'Life-threatening to ill and elderly persons. General population should avoid outdoor activities.'
        }],
      
      pollutant_standards : {
        'co': 35000,
          'no2': 53,
          'pm25': 35,
          'so2': 500,
          'pm10': 150,
          'o3': 70
        }

};


module.exports = datapoints;
 

 
