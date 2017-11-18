import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import {Message} from './message.model';
import {ConversationService} from './conversation.service';

@Injectable()
export class MessengerService {

  private url = 'http://localhost:8888';
  private socket;

  constructor(private conversationService: ConversationService) {
    this.socket = io(this.url);

    // this tells the server which socket ID belongs to the admin
    this.socket.emit('admin-init', 'admin initialized');

    // set admin ID within the app
    this.socket.on('admin id set', (id: string) => {
      this.conversationService.setAdminId(id);
    });

    // listens for messages from visitors
    this.socket.on('visitor message', (data: Message) => {
      this.conversationService.addToLog(data.userId, {userId: data.userId, text: data.text});
    });
  }

  // public getMessages() {
  //   return Observable.create((observer) => {
  //     // this.socket.on('visitorId message', (data: Message) => {
  //     //   this.sendMessage(data.userId, 'Hello');
  //     //
  //     //   observer.next(data);
  //     //
  //     //   this.conversationService.addToLog(data.userId, {userId: this.conversationService.adminId, text: 'Hello'})
  //     // })
  //   })
  // }

  public sendMessage(userId: string, text: string) {
    this.socket.emit('reply', {userId, text});
  }

}
