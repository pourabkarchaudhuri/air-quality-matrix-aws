import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { ApiAq } from './apiAQ';

@Injectable()
export class ConfigService {
  constructor(private http: Http) {

  }
  // Createheaders(headers: Headers) {
  //   headers.append('x-api-key', 'GnDnCvHEm88jPwuPGSGTR1J7bgMFwAJS5gKy1FKf');
  // }


//   getData() : Observable<Object> {

//     // ...using get request
//     return this.http.get('https://api.openaq.org/v1/cities?city=Chennai')
//                    // ...and calling .json() on the response to return data
//                     .map((res:Response) => {
//                         // console.log("I CAN SEE DATA HERE: ", res);
//                         res.json()})
//                     //...errors if any
//                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

// }

// getData():Observable<Object> {
//   return this.http.get('https://api.openaq.org/v1/cities?city=Chennai')
//    .map(res:Response=>res.json())
//    .catch((error:any) => Observable.throw(error.toString() || 'Server error'));
//  }

getData(city) : Observable<Object[]> {
  // ...using get request
  let headers = new Headers();
  headers.append('x-api-key', 'GnDnCvHEm88jPwuPGSGTR1J7bgMFwAJS5gKy1FKf');
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  if (city == '') {
    return this.http.get('https://puoaah335k.execute-api.us-east-1.amazonaws.com/v1/latest', {
      headers: headers
    })
                   // ...and calling .json() on the response to return data
                   .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  } else {
    console.log(city + "Inside city");
    return this.http.get('https://puoaah335k.execute-api.us-east-1.amazonaws.com/v1/latest?city=' + city, {
      headers: headers
    })
                   // ...and calling .json() on the response to return data
                   .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
}