import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MessengerService} from "./core/messenger.service";
import {ChatLogService} from "./core/chat-log.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MessengerService,
    ChatLogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
