import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MessengerService} from './core/messenger.service';
import {ConversationService} from './core/conversation.service';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {VisitorService} from './core/visitor.service';

const appRoutes: Routes = [
  { path: 'conversation/:id', component: ChatBoxComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MessengerService,
    ConversationService,
    VisitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
