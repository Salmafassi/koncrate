import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends DataService {

  constructor(http: HttpClient) {
    super('http://127.0.0.1:8000/api/pages',http);
   }
}

