import { NotFound } from './../common/not-found';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError  } from 'rxjs';

import { AppErrors } from '../common/app-errors';
import { Slider } from './slider';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor(private url: string,private http: HttpClient) {
    
   }
  getAll(rowpost?:number){
    //map((data: any) => data.result ),
   return this.http.get(this.url+"/"+rowpost).pipe(catchError(this.errorHandler))
  }
  getOne(slug : string){
    return this.http.get(this.url+'/show/'+slug).pipe(catchError(this.errorHandler))
  }
  getOnePage(slug : string){
    return this.http.get(this.url+'/'+slug).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    if(error.status==404){
      return throwError(new NotFound);
    }
    else if(error.status==400){
      return throwError(new NotFound);
    }
      return throwError(new AppErrors);
  }
 
  add(resource: any){
   return this.http.post(this.url,resource).pipe(catchError(this.errorHandler));
  }
  update(resource: any){
   return this.http.put(this.url+'/'+resource.id,resource);
  }
  delete(){
    return this.http.delete(this.url).pipe(catchError(this.errorHandler));
  }
  // transformData(rawData: any) {
  //   let processedData: Array<Candle> = [];
  //   Object.keys(rawData["Time Series (Daily)"] || []).forEach(key => {
  //     processedData.push({
  //       date: new Date(key),
  //       open: rawData["Time Series (Daily)"][key]["1. open"],
  //       high: rawData["Time Series (Daily)"][key]["2. high"],
  //       low: rawData["Time Series (Daily)"][key]["3. low"],
  //       close: rawData["Time Series (Daily)"][key]["4. close"],
  //       volume: rawData["Time Series (Daily)"][key]["5. volume"]
  //     });
  //   });
  //   return processedData;
  // }
}
