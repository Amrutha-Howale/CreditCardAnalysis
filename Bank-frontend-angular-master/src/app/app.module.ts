import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatementUploadComponent } from './statement-upload/statement-upload.component';
import {HttpClientModule} from '@angular/common/http';
import { GraphdisplayComponent } from './graphdisplay/graphdisplay.component'

@NgModule({
  declarations: [
    AppComponent,
    StatementUploadComponent,
    GraphdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
