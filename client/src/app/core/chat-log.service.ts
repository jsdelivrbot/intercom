import { Injectable } from '@angular/core';
import { Message } from "./message.model";

@Injectable()
export class ChatLogService {

  adminId: string;
  private logs: any = {};

  constructor() { }

  private createNewVisitor(id: string): void {
    this.logs[id] = <Message[]>[];
  }

  public setAdminId(id: string): void {
    if (!this.adminId) {
      this.adminId = id;
    }
  }

  public getLog(id: string): Message[] {
    if (this.logs.hasOwnProperty(id)) {
      return this.logs[id];
    }
    return [];
  }
  public addMessage(message: Message): void {
    if (!this.logs.hasOwnProperty(message.userId)) {
      this.createNewVisitor(message.userId);
    }
    this.logs[message.userId].push(message);
  }

  public getAllVisitors(): String[] {
    return Object.keys(this.logs);
  }
}
