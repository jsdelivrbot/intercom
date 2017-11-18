import {Message} from './message.model';

export interface Conversation {
  log: Message[];
  lastSeen: number;
}
