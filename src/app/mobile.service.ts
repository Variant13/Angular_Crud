import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private ms:HttpClient) { }
  url = "http://localhost:5050/mobiles"
  fetchMobiles(){

    
  }
}
