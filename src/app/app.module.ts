import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoToDrawComponent } from './who-to-draw/who-to-draw.component';
import { PoseComponent } from './pose/pose.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoToDrawComponent,
    PoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
