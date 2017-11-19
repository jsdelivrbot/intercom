import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../core/models/message.model';
import {User} from '../core/models/user.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() visitor: User;

  userType: string;
  avatarColor: string;

  constructor() { }

  ngOnInit() {
    this.userType = this.getUserType(this.message.userAlias);
    this.avatarColor = this.getAvatarColor();
  }

  private getUserType(alias: string): string {
    return alias === 'You' ? 'admin' : 'visitor';
  }

  private getAvatarColor(): string {
    return this.userType === 'admin' ? '#584848' : this.visitor.avatarColor;
  }
}
