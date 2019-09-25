import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApmService } from '@elastic/apm-rum-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [ApmService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(service: ApmService) {
    service.init({
      serverName: 'rum-angular',
      debug: true
    })
  }
}
