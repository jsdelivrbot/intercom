import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChatLogService} from '../core/chat-log.service';
import {Message} from '../core/message.model';
import {Subscription} from 'rxjs/Subscription';
import {MessengerService} from '../core/messenger.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  messages: Message[] = [];

  visitorId: string;

  constructor(public chatLogService: ChatLogService, private messengerService: MessengerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.visitorId = params.id;

      this.messages = this.chatLogService
        .getLog(params.id)
    });
  }

  userType(id) {
    return id === this.chatLogService.adminId ? 'admin' : 'visitor';
  }

  sendMessage(e) {
    if (e.keyCode === 13) {
      this.messengerService.sendMessage(this.visitorId, e.target.value);
      this.chatLogService.addToLog(this.visitorId, {userId: this.chatLogService.adminId, text: e.target.value});
      e.target.value = '';
    }
  }
}
