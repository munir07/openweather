import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from '../services/openweather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  result = {
    temp: 0,
    humidity: 0,
    pressure: 0,
  };
  desc = '';
  cityName: string = "";

  constructor(private openWeatherSvc: OpenweatherService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.cityName = this.activatedRoute.snapshot.params.cityName;
      this.openWeatherSvc.getWeather(this.cityName)
        .subscribe((data: any) => {
          this.result = data.main;
          this.desc = data.weather[0].description;
        })
  }
}
