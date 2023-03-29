import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './fakebackend';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, HttpClientModule, AppRoutingModule ],
  providers: [fakeBackendProvider],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
