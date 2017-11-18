export interface IMessage {
  userId: string;
  text: string;
  timestamp: number;
}

export class Message implements IMessage {
  userId: string;
  text: string;
  timestamp: number;

  constructor(userId: string, text: string) {
    this.userId = userId;
    this.text = text;
    this.timestamp = Date.now();
  }
}
