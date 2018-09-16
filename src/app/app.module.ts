import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { RestserviceService } from './restservice.service';
import {HttpClientModule} from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountryComponent,
    HomeComponent,
    CurrencyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'region/:region',component:RegionsComponent},
      {path:'country/:country',component:CountryComponent},
      {path:'currency/:currency',component:CurrencyComponent},
      {path:'language/:language',component:LanguageComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [RestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
