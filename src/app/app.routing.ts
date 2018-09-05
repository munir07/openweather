import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list.component';
import { CityWeatherComponent } from './components/city-weather.component';

const appRoutes = [
    {
        path: 'Home',
        component: CityListComponent,
    },
    {
        path: 'CityList',
        component: CityListComponent,
    },
    {
        path: 'CityWeather/:cityName',
        component: CityWeatherComponent,
    },
    {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: CityListComponent,
    }
];

@NgModule({
    declarations: [

    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }
