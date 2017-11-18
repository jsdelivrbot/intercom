import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ChatData} from "./core/chat-data.model";

@Injectable()
export class ChatService {

  private url = 'http://localhost:8888';
  private socket;

  constructor() {
    this.socket = io(this.url);

    // this tells the server which socket ID belongs to the admin
    this.socket.emit('admin-init', 'admin initialized');
  }

  public getMessages() {
    return Observable.create((observer) => {
      this.socket.on('visitor message', (data: ChatData) => {
        this.sendMessage(data.visitor, 'Hello');
        observer.next(data);
      })
    })
  }

  public sendMessage(visitor: string, msg: string) {
    this.socket.emit('reply', {visitor, msg})
  }

}
