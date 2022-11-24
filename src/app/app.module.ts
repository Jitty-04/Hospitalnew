import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalEntryComponent } from './hospital-entry/hospital-entry.component';
import { SearchComponent } from './search/search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalEntryComponent,
    SearchComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
