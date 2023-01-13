import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site-principal/site-principal.component';
import { NavbarComponent } from './site-principal/navbar/navbar.component';
import { Error404Component } from './site-principal/error404/error404.component';
import { HeaderComponent } from './site-principal/header/header.component';
import { ContentOneComponent } from './site-principal/content-one/content-one.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Error404Component,
    HeaderComponent,
    ContentOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
