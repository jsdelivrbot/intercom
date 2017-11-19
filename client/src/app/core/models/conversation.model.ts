import {IMessage} from './message.model';
import {User} from './user.model';

export interface IConversation {
  id: string;
  visitor: User;
  log: IMessage[];
  latestTime: number;
}

export class Conversation implements IConversation {
  id: string;
  visitor: User;
  log: IMessage[];
  latestTime: number;

  constructor(visitorId) {
    this.id = visitorId;
    this.visitor = new User(visitorId);
    this.log = [];
    this.latestTime = 0;
  }
}
