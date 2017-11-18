import {IMessage} from './message.model';
import {Visitor} from './visitor.model';

export interface Conversation {
  visitor: Visitor,
  log: IMessage[];
  lastSeen: number;
}
