import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MessengerService} from './core/messenger.service';
import {ChatLogService} from './core/chat-log.service';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent
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
