import {IMessage} from './message.model';

export interface Conversation {
  log: IMessage[];
  lastSeen: number;
}
