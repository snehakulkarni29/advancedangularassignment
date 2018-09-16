import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  baseurl="https://restcountries.eu/rest/v2/";

  constructor(private http:HttpClient) 
  {  

  }
  getbyregion(region)  
  {
    let regionurl = this.baseurl + "region/" + region;
    return this.http.get(regionurl);
  }
  getbycountry(country)  
  {
    let countrydetails = this.baseurl + "name/" + country;
    return this.http.get(countrydetails);
  }
  getbycurrency(currency)  
  {
    let countrydetails = this.baseurl + "currency/" + currency;
    return this.http.get(countrydetails);
  }
  getbylanguage(language)  
  {
    let countrydetails = this.baseurl + "lang/" + language;
    return this.http.get(countrydetails);
  }
}
