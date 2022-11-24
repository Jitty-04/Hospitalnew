import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalEntryComponent } from './hospitalentry/hospital-entry.component';
import { SearchComponent } from './search/search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { ViewComponent } from './view/view.component';
import { NavigationComponent } from './navigation/navigation.component';


const myRout:Routes=[
  {
    path:"",
    component:HospitalEntryComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"delete",
    component:StudentDeleteComponent
  },
 {
  path:"view",
  component:ViewComponent
 }
]




@NgModule({
  declarations: [
    AppComponent,
    HospitalEntryComponent,
    SearchComponent,
    StudentDeleteComponent,
    ViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRout)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
