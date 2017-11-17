import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  private url = 'http://localhost:8888';
  private socket;

  constructor() {
    this.socket = io(this.url);
    this.socket.emit('admin-init', 'admin initialized');

    this.socket.on('visitor message', (data) => {
      console.log(data.msg, data.visitor)
      this.socket.emit('reply', {msg: 'acknowldeged', visitor: data.visitor})
    })

  }

}
