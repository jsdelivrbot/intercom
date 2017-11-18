import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Message} from "./message.model";
import {ChatLogService} from "./chat-log.service";

@Injectable()
export class MessengerService {

  private url = 'http://localhost:8888';
  private socket;

  constructor(private chatLogService: ChatLogService) {
    this.socket = io(this.url);

    // this tells the server which socket ID belongs to the admin
    this.socket.emit('admin-init', 'admin initialized');

    this.socket.on('admin id set', (id: string) => {
      this.chatLogService.setAdminId(id);
    });

    this.socket.on('visitor message', (data: Message) => {
      this.chatLogService.postMessage(data.userId, {userId: data.userId, text: data.text});

      // TODO: this is placeholder
      this.sendMessage(data.userId, 'Hello');
      this.chatLogService.postMessage(data.userId, {userId: this.chatLogService.adminId, text: 'Hello'});
    })
  }

  // public getMessages() {
  //   return Observable.create((observer) => {
  //     // this.socket.on('visitor message', (data: Message) => {
  //     //   this.sendMessage(data.userId, 'Hello');
  //     //
  //     //   observer.next(data);
  //     //
  //     //   this.chatLogService.postMessage(data.userId, {userId: this.chatLogService.adminId, text: 'Hello'})
  //     // })
  //   })
  // }

  public sendMessage(userId: string, text: string) {
    this.socket.emit('reply', {userId, text})
  }

}
