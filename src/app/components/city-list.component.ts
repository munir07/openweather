import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  @ViewChild('myCityForm')
  theForm: NgForm;

  cityList: string[] = ["Singapore", "Tokyo"];
  constructor(private route:Router) { }

  ngOnInit() {
  }

  addToCity() {
    this.cityList.push(this.theForm.value.cityNew);
    this.theForm.resetForm();
  }

  displayWeather(city: string){
    this.route.navigate(['/CityWeather', city])
  }
}
