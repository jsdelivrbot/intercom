import {IMessage} from './message.model';
import {User} from './user.model';

export interface Conversation {
  visitor: User,
  log: IMessage[];
  lastSeen: number;
}
