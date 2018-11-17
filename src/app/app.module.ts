import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomComponent } from './mom/mom.component';
import { BabyComponent } from './baby/baby.component';

@NgModule({
  declarations: [
    AppComponent,
    MomComponent,
    BabyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
