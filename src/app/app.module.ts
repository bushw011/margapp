import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { MarginfoComponent } from './marginfo/marginfo.component';
import {DataService} from "./data.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    MarginfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    DataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
