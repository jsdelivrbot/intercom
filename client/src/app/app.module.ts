import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {SocketService} from './core/socket.service';
import {ConversationService} from './core/conversation.service';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {UserService} from './core/user.service';
import { SortByLatestPipe } from './core/sort-by-latest.pipe';

const appRoutes: Routes = [
  { path: 'conversation/:id', component: ChatBoxComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    SortByLatestPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SocketService,
    ConversationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
