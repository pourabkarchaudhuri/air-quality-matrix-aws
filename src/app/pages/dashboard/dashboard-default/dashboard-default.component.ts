import { Component, OnInit, HostListener, NgZone } from '@angular/core';


import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';
import { ConfigService } from '../../../service';
import { ApiAq } from '../../../apiAQ';
import { concat } from 'rxjs/operator/concat';
import { CityDetails } from '../../../city';
import { Observable } from 'rxjs';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/takewhile';

declare const AmCharts: any;
declare const $: any;
@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  providers: [ConfigService],
  styleUrls: [
    './dashboard-default.component.css',
    '../../../../assets/icon/svg-animated/svg-weather.css'
  ]
})
export class DashboardDefaultComponent implements OnInit {

  totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
  totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
  totalValueGraphOption = buildChartOption();
  textResponse: ApiAq[];
  data: ApiAq[];
  message: any;
  randomAnswer: any;
  i: any
  value: Object[];
  public value1;
  public value2;
  public value3;
  public value4;
  public timer: any;
  public timer2: any;

  city: any;
  value5;
  searchCity: string;
  key;
  coAverage;
  so2Average;
  no2Average;
  pm25Average;
  mapArray = [];
  targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
  strongestImpactCity;
  strongestLocation;
  precautions;
  healthStatus;
  healthStatus1;
  risk;
  risk3;
  latLongArray = [];
  no2Concentration;
  so2Concentration;
  coConcentration;
  pm25Concentration;
  o3Concentration;
  risk2;
  risk1
  status;
  status1
  aqi;
  private display: boolean;
  private alive: boolean;
  private cityAlive: boolean;

  constructor(private myHttp: ConfigService, private zone:NgZone) {
    this.message;
    this.randomAnswer;
    this.value1 = 1;
    this.value2 = 1;
    this.value3 = 1;
    this.value4 = 1;
    this.i = 0;
    this.timer = 18
    this.city = '';
    this.value5 = 20;
    this.searchCity = 'India';
    this.coAverage = 0;
    this.so2Average = 0;
    this.no2Average = 0;
    this.pm25Average = 0;
    this.mapArray = [];
    this.latLongArray = [];
    this.no2Concentration = 0;
    this.so2Concentration = 0;
    this.coConcentration = 0;
    this.pm25Concentration = 0;
    this.o3Concentration = 0;
    this.alive = true;
    this.display = false;
    this.cityAlive = false;


    

  }

  ngOnInit() {
 console.log("before calling function");
      this.myFunc();
   console.log("after calling function");
 const plot = $.plot('#realtimeupdate', [getRandomData()], {
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: '#FFB64D',
      },
      lines: {
        fill: true,
        fillColor: '#FFB64D',
        borderWidth: 0,
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
      },
      yaxis: {
        min: 0,
        max: 100,
        show: false,
      },
      xaxis: {
        show: false,
      }
    });


    AmCharts.makeChart('fees-collection', {
      'theme': 'light',
      'type': 'serial',
      'hideCredits': true,
      'startDuration': 2,
      'dataProvider': [{
        'country': 'Collection',
        'visits': 4025,
        'color': ' #4680ff'
      }, {
        'country': 'Fees',
        'visits': 3782,
        'color': '#FC6180'

      }, {
        'country': 'Expence',
        'visits': 3586,
        'color': '#FFB64D'

      }],
      'valueAxes': [{
        'position': 'left',
        'axisAlpha': 0,
        'title': ''
      }],
      'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillColorsField': 'color',
        'fillAlphas': 1,
        'axisAlpha': 1,
        'lineAlpha': 0.1,
        'type': 'column',
        'columnWidth': 0.5,
        'valueField': 'visits'
      }],
      'depth3D': 0,
      'angle': 0,
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'gridAlpha': 0,
        'labelRotation': 0
      },
      'export': {
        'enabled': true
      }
    });

    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
    targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5';
    targetSVG += ',9,5.5 S12.5,7.067,12.5,9z';

    AmCharts.makeChart('world-map-markers', {
      'type': 'map',
      'theme': 'light',
      'hideCredits': true,
      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 10,
        'zoomLongitude': 80.6353,
        'zoomLatitude': 21.19,
      },

      'areasSettings': {
        'unlistedAreasColor': '#fc889f',
        'unlistedAreasAlpha': 0.9
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': false,
        'homeButtonEnabled': false
      },

      'backgroundZoomsToTop': true,
      'linesAboveImages': true,


    });

  
    AmCharts.makeChart('statistics-chart', {
      type: 'serial',
      marginTop: 0,
      hideCredits: true,
      marginRight: 0,
      dataProvider: [{
        year: 'Jan',
        value: 2
      }, {
        year: 'Feb',
        value: 1.87
      }, {
        year: 'Mar',
        value: 0.97
      }, {
        year: 'Apr',
        value: 1.64
      }, {
        year: 'May',
        value: 0.4
      }, {
        year: 'Jun',
        value: 2.9
      }, {
        year: 'Jul',
        value: 5.2
      }, {
        year: 'Aug',
        value: 0.77
      }, {
        year: 'Sap',
        value: 3.1
      }],
      valueAxes: [{
        axisAlpha: 0,
        dashLength: 6,
        gridAlpha: 0.1,
        position: 'left'
      }],
      graphs: [{
        id: 'g1',
        bullet: 'round',
        bulletSize: 9,
        lineColor: '#4680ff',
        lineThickness: 2,
        negativeLineColor: '#4680ff',
        type: 'smoothedLine',
        valueField: 'value'
      }],
      chartCursor: {
        cursorAlpha: 0,
        valueLineEnabled: false,
        valueLineBalloonEnabled: true,
        valueLineAlpha: false,
        color: '#fff',
        cursorColor: '#FC6180',
        fullWidth: true
      },
      categoryField: 'year',
      categoryAxis: {
        gridAlpha: 0,
        axisAlpha: 0,
        fillAlpha: 1,
        fillColor: '#FAFAFA',
        minorGridAlpha: 0,
        minorGridEnabled: true
      },
      'export': {
        enabled: true
      }
    });
    AmCharts.makeChart('solid-gauge1', {
      type: 'gauge',
      hideCredits: true,
      theme: 'light',
      axes: [{
        axisAlpha: 0,
        tickAlpha: 0,
        labelsEnabled: false,
        startValue: 0,
        endValue: 100,
        startAngle: 0,
        endAngle: 360,
        bands: [{
          color: '#E5E5E5',
          startValue: -35,
          endValue: 35,
          radius: '100%',
          innerRadius: '92%'
        }, {
          color: '#93BE52',
          startValue: -35,
          endValue: 20,
          radius: '100%',
          innerRadius: '92%'
        }]
      }],
      'export': {
        enabled: true
      }
    });
    AmCharts.makeChart('world-map-vititors', {
      'type': 'map',
      'projection': 'winkel3',
      'hideCredits': true,
      'theme': 'light',
      'imagesSettings': {
        'rollOverColor': '#FC6180',
        'rollOverScale': 3,
        'selectedScale': 3,
        'selectedColor': '#FC6180',
        'color': '#FC6180'
      },

      'areasSettings': {
        'unlistedAreasColor': '#dfdfdf',
        'outlineThickness': 0.1
      },

      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 4,
        'zoomLongitude': 80,
        'zoomLatitude': 20,
        'images': this.mapArray
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': false,
        'homeButtonEnabled': false
      },
      'export': {
        'enabled': true
      }
    });

    AmCharts.makeChart('solid-gauge', {
      'type': 'gauge',
      'hideCredits': true,
      'theme': 'light',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 360,
        'bands': [{
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '97%'
        }, {
          'color': '#4680FE',
          'startValue': 0,
          'endValue': 60,
          'radius': '100%',
          'innerRadius': '97%'
        }, {
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '70%',
          'innerRadius': '67%'
        }, {
          'color': '#FC6180',
          'startValue': 0,
          'endValue': 50,
          'radius': '70%',
          'innerRadius': '67%'
        }, {
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '37%'
        }, {
          'color': '#FFB64D',
          'startValue': 0,
          'endValue': 25,
          'radius': '40%',
          'innerRadius': '37%'
        }]
      }],
      'export': {
        'enabled': true
      }
    });

    $('.sadball').createWaterBall({
      cvs_config: {
        width: 100,
        height: 100
      },
      wave_config: {
        waveWidth: 0.025,
        waveHeight: 3
      },
      data_range: [40, 70, 100],
      isLoading: true,
      nowRange: 23,
      targetRange: 100
    });

    $('.happyball').createWaterBall({
      cvs_config: {
        width: 100,
        height: 100
      },
      wave_config: {
        waveWidth: 0.025,
        waveHeight: 3,
      },
      data_range: [40, 70, 100],
      isLoading: true,
      nowRange: 75,
      targetRange: 100
    });
    setInterval(function() {
        let range1 = (96);
        let range2 = (4);
        $('.sadball').createWaterBall('updateRange', range2);
        $('.happyball').createWaterBall('updateRange', range1);
      }, 5000);
  }
  
  myFunction(city = '') {

    const myFunctionContext = this;

    const context = this;
    if (city == '') {
      IntervalObservable.create(3000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.myHttp.getData(city)
          .subscribe(data => {
            
            this.message = data;
            if (this.message && this.message.results.strongestImpact && this.message.results.strongestImpact.suggestions) {
              
              let res = this.message.results.measurements;
              
              this.coAverage = res.co;
              this.so2Average = res.so2;
              this.no2Average = res.no2;
              this.pm25Average = res.pm25;
             
              var context = this;
              let strongest = this.message.results.strongestImpact;
  
              this.strongestImpactCity = strongest.city;
              this.strongestLocation = strongest.name; 
              let lat = strongest.lat;
              let long = strongest.long;
              this.precautions = this.message.results.suggestions.precaution;
              this.healthStatus = this.message.results.suggestions.status;
              this.healthStatus1=this.healthStatus.charAt(0).toUpperCase()+this.healthStatus.slice(1);
              this.risk = this.message.results.suggestions.risk;
               this.risk3 =this.risk.charAt(0).toUpperCase()+this.risk.slice(1);
              this.message.results.sensors.forEach(function(element) {
                context.mapArray.push({
                    'svgPath': context.targetSVG,
                    'zoomLevel': 3,
                    'scale': 1,
                    'title': `AQI: ${element.aqi}, ${element.name}, ${element.city}`,
                    'latitude': `${element.lat}`,
                    'longitude': `${element.long}`
                })
              })
  
              this.message.results.sensors.forEach(function(element) {
                context.latLongArray.push({
                  lat: element.lat,
                  long: element.long,
                  label: `NO2: ${element.measurements.no2}, CO: ${element.measurements.co}, so2: ${element.measurements.so2}, pm25: ${element.measurements.pm25}.`
                })
              })
  
              let concentration = this.message.results.concentration;
              this.so2Concentration = concentration.so2;
              this.no2Concentration = concentration.no2;
              this.coConcentration = concentration.co;
              this.pm25Concentration = concentration.pm25;
              this.o3Concentration = concentration.o3;
  
              this.aqi = this.message.results.aqi;
              this.risk2 = this.message.results.strongestImpact.suggestions.risk;
             this.risk1=this.risk2.charAt(0).toUpperCase() + this.risk2.slice(1);
             console.log(this.risk1)
              this.status = this.message.results.strongestImpact.suggestions.status;
              this.status1 =this.status.charAt(0).toUpperCase()  + this.status.slice(1);
              console.log(this.status1);
              
            
              AmCharts.makeChart('world-map-vititors', {
                'type': 'map',
                'projection': 'winkel3',
                'hideCredits': true,
                'theme': 'light',
                'imagesSettings': {
                  'rollOverColor': '#FC6180',
                  'rollOverScale': 3,
                  'selectedScale': 3,
                  'selectedColor': '#FC6180',
                  'color': '#FC6180'
                },
          
                'areasSettings': {
                  'unlistedAreasColor': '#dfdfdf',
                  'outlineThickness': 0.1
                },
          
                'dataProvider': {
                  'map': 'worldLow',
                  'zoomLevel': 8,
                  'zoomLongitude': 80,
                  'zoomLatitude': 20,
                  'images': context.mapArray
                },
                'zoomControl': {
                  'panControlEnabled': false,
                  'zoomControlEnabled': false,
                  'homeButtonEnabled': false
                },
                'export': {
                  'enabled': true
                }
              });
  
              AmCharts.makeChart('world-map-markers', {
                'type': 'map',
                'theme': 'light',
                'hideCredits': true,
                'dataProvider': {
                  'map': 'worldLow',
                  'zoomLevel': 4,
                  'zoomLongitude': lat,
                  'zoomLatitude': long,
                },
          
                'areasSettings': {
                  'unlistedAreasColor': '#fc889f',
                  'unlistedAreasAlpha': 0.9
                },
                'zoomControl': {
                  'panControlEnabled': false,
                  'zoomControlEnabled': false,
                  'homeButtonEnabled': false
                },
          
                'backgroundZoomsToTop': true,
                'linesAboveImages': true,
          
          
              });
              
             
            }
  
           
          });
      });
       
          
          
    } else {
      this.cityAlive = true;
      IntervalObservable.create(3000)
      .takeWhile(() => this.cityAlive) // only fires when component is alive
      .subscribe(() => {
        this.myHttp.getData(context.city)
          .subscribe(data => {
  
            this.message = data;
            if (this.message && this.message.results.strongestImpact && this.message.results.strongestImpact.suggestions) {
              let res = this.message.results.measurements;
           
              this.coAverage = res.co;
              this.so2Average = res.so2;
              this.no2Average = res.no2;
              this.pm25Average = res.pm25;
    
              var context = this;
              let strongest = this.message.results.strongestImpact;
  
              this.strongestImpactCity = strongest.city;
              this.strongestLocation = strongest.name; 
              let lat = strongest.lat;
              let long = strongest.long;
              this.precautions = this.message.results.suggestions.precaution;
              this.healthStatus = this.message.results.suggestions.status;
              this.healthStatus1=this.healthStatus.charAt(0).toUpperCase()+ this.healthStatus.slice(1);
              this.risk = this.message.results.suggestions.risk;
               this.risk3 =this.risk.charAt(0).toUpperCase()+this.risk.slice(1);
  
              this.message.results.sensors.forEach(function(element) {
                context.mapArray.push({
                    'svgPath': context.targetSVG,
                    'zoomLevel': 3,
                    'scale': 1,
                    'title': `AQI: ${element.aqi}, ${element.name}, ${element.city}`,
                    'latitude': `${element.lat}`,
                    'longitude': `${element.long}`
                })
              })
  
              this.message.results.sensors.forEach(function(element) {
                context.latLongArray.push({
                  lat: element.lat,
                  long: element.long,
                  label: `NO2: ${element.measurements.no2}, CO: ${element.measurements.co}, so2: ${element.measurements.so2}, pm25: ${element.measurements.pm25}.`
                })
              })
  
              let concentration = this.message.results.concentration;
              this.so2Concentration = concentration.so2;
              this.no2Concentration = concentration.no2;
              this.coConcentration = concentration.co;
              this.pm25Concentration = concentration.pm25;
              this.o3Concentration = concentration.o3;
  
              this.aqi = this.message.results.aqi;
              this.risk2 = this.message.results.strongestImpact.suggestions.risk;
              this.risk1=this.risk2.charAt(0).toUpperCase() + this.risk2.slice(1);
              console.log(this.risk1)
               this.status = this.message.results.strongestImpact.suggestions.status;
               this.status1 =this.status.charAt(0).toUpperCase() + this.status.slice(1);
               console.log(this.status1);
             
              AmCharts.makeChart('world-map-vititors', {
                'type': 'map',
                'projection': 'winkel3',
                'hideCredits': true,
                'theme': 'light',
                'imagesSettings': {
                  'rollOverColor': '#FC6180',
                  'rollOverScale': 3,
                  'selectedScale': 3,
                  'selectedColor': '#FC6180',
                  'color': '#FC6180'
                },
          
                'areasSettings': {
                  'unlistedAreasColor': '#dfdfdf',
                  'outlineThickness': 0.1
                },
          
                'dataProvider': {
                  'map': 'worldLow',
                  'zoomLevel': 8,
                  'zoomLongitude': 80,
                  'zoomLatitude': 20,
                  'images': context.mapArray
                },
                'zoomControl': {
                  'panControlEnabled': false,
                  'zoomControlEnabled': false,
                  'homeButtonEnabled': false
                },
                'export': {
                  'enabled': true
                }
              });
  
              AmCharts.makeChart('world-map-markers', {
                'type': 'map',
                'theme': 'light',
                'hideCredits': true,
                'dataProvider': {
                  'map': 'worldLow',
                  'zoomLevel': 4,
                  'zoomLongitude': lat,
                  'zoomLatitude': long,
                },
          
                'areasSettings': {
                  'unlistedAreasColor': '#fc889f',
                  'unlistedAreasAlpha': 0.9
                },
                'zoomControl': {
                  'panControlEnabled': false,
                  'zoomControlEnabled': false,
                  'homeButtonEnabled': false
                },
          
                'backgroundZoomsToTop': true,
                'linesAboveImages': true,
          
          
              });
              
             
            }
  
          });
      });
       

    }
  }

  resetDashboard(callback) {
    

    const context = this;

    this.zone.run(() => {

      
      document.getElementById('world-map-vititors').innerHTML = "";
      document.getElementById('world-map-markers').innerHTML = "";
      
      this.alive = false;
      this.cityAlive = false;
      this.city = '';

      this.coAverage = "--";
      this.so2Average =  "--";
      this.no2Average =  "--";
      this.pm25Average =  "--";
      this.strongestImpactCity =  "--";
      this.strongestLocation =  "--";
      this.precautions =  "--";
      this.healthStatus =  "--";
      this.risk =  "--";
      this.latLongArray = [];
      this.no2Concentration = "--";
      this.so2Concentration = "--";
      this.coConcentration = "--";
      this.pm25Concentration = "--";
      this.o3Concentration = "--";
      this.risk1 =  "--";
      this.status1 =  "--";
      this.aqi =  "--";
      this.mapArray = [];
      this.latLongArray = [];
     
      callback("RESET");

    });
  }

  getDataByCity(city) {
    
    const context = this;
   
    this.resetDashboard(function(res) {
      
      context.searchCity = city;
      context.city = city;
    })
    
    setTimeout(() => {
      this.myFunction(context.city);
    }, 10)

    console.log(city);
   
  }

  clearAll() {
   
    clearInterval(this.timer);
    this.timer = undefined;
  }

 
  myFunc() {
    this.myFunction();    
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent, city) { 

    if(event.keyCode == 13) {
      this.getDataByCity(this.city);
    }
    
  }


  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

  // map started
  lat = 21.1591857;
  lng = 80.7522563;
  latA = 21.7613308;
  lngA = 80.6753074;
  zoom = 4;

  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];
  // map ended

}

function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}

function buildChartJS(a, b, f, c) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption() {
  return {
    title: {
      display: false
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    }
  };
}
