import {User} from './user.model';

export interface IMessage {
  userId: string;
  userAlias?: string;
  text: string;
  timestamp: number;
}

export class Message implements IMessage {
  userId: string;
  userAlias?: string;
  text: string;
  timestamp: number;

  constructor(user: User, text: string) {
    this.userId = user.id;
    this.userAlias = user.alias;
    this.text = text;
    this.timestamp = Date.now();
  }
}
