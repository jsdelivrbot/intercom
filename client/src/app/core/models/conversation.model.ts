import {IMessage} from './message.model';
import {User} from './user.model';

export interface IConversation {
  visitor: User;
  log: IMessage[];
  latestTime: number;
}

export class Conversation implements IConversation {
  visitor: User;
  log: IMessage[];
  latestTime: number;

  constructor(visitorId) {
    this.visitor = new User(visitorId);
    this.log = [];
    this.latestTime = 0;
  }
}
