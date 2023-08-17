import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   url : string= 'https://api.openweathermap.org/data/2.5/weather';
   apiKey:string='91721e5d95c85bf7c6b3cc40d6c5ddd0';
    

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.url, {
      params: new HttpParams().set('appid', this.apiKey).set('q', cityName).set('units', 'metric')
    });
  }
}
