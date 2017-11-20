import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Message } from './models/message.model';
import {ConversationService} from './conversation.service';
import {UserService} from './user.service';

@Injectable()
export class SocketService {

  private url = 'http://localhost:8888';
  private socket;

  constructor(private conversationService: ConversationService, private userService: UserService) {
    this.socket = io(this.url);

    // this tells the server which socket ID belongs to the admin
    this.socket.emit('admin-init', 'admin initialized');

    // set admin ID within the app
    this.socket.on('admin-id-set', (id: string) => {
      this.userService.setAdmin(id);
    });

    // listens for messages from visitors
    this.socket.on('visitor-message', (message: Message) => {
      this.conversationService.addNewMessage(message.userId, message);
    });

    // listens for visitor disconnect
    this.socket.on('visitor-disconnected', (id: string) => {
      this.conversationService.endConversation(id);
    });
  }

  public sendMessage(visitorId: string, msg: Message) {
    const data = {
      userId: visitorId,
      text: msg.text
    };

    this.socket.emit('reply', data);
  }

}
