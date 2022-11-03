import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  
  // url="http://192.168.0.58:8088/api/website"
  url="http://localhost:8088/api/website"
  // url="http://192.168.173.120:8088/api/website"

  constructor(private http:HttpClient) { }


  getAllContents(){
    return this.http.get(this.url+'/getAllData');
  }


}
