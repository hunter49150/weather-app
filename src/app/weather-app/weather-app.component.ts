import { Component ,OnInit} from '@angular/core';
import { WeatherService } from '../servies/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){}
  
  weatherData ?: WeatherData;
  d=new Date();
  dayNight = this.d.getHours();
  cityName : string= 'Bengaluru';

  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName='';

  }

  onSubmit(){
    this.getWeather(this.cityName);
    this.cityName='';

  }

  private getWeather(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response) =>{
        this.weatherData =response;
        console.log(response);
      }
    })
  }
 

 

}
