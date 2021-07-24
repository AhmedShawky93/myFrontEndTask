import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErorrComponent } from './erorr/erorr.component';
import { DevpackageComponent } from './pricing/devpackage/devpackage.component';
import { ExplorerpackageComponent } from './pricing/explorerpackage/explorerpackage.component';
import { VisoinpackageComponent } from './pricing/visoinpackage/visoinpackage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    DashboardComponent,
    ErorrComponent,
    DevpackageComponent,
    ExplorerpackageComponent,
    VisoinpackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
