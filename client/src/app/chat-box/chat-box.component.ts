import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ConversationService} from '../core/conversation.service';
import {IMessage, Message} from '../core/message.model';
import {Subscription} from 'rxjs/Subscription';
import {MessengerService} from '../core/messenger.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit, OnDestroy, OnChanges {

  messages: IMessage[] = [];

  visitorId: string;

  constructor(public conversationService: ConversationService, private messengerService: MessengerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.visitorId = params.id;

      this.messages = this.conversationService
        .getLog(params.id)
    });
  }

  userType(id) {
    return id === this.conversationService.adminId ? 'admin' : 'visitor';
  }

  send(e) {
    if (e.keyCode === 13) {
      const msg = new Message(this.conversationService.adminId, e.target.value);
      console.log('msg', msg)
      this.messengerService.sendMessage(msg);
      this.conversationService.addToLog(this.visitorId, msg);
      e.target.value = '';
    }
  }

  ngOnChanges() {
    console.log('on change')
  }

  ngOnDestroy() {
    console.log('on destroy triggered?')
    this.conversationService.setLastSeen(this.visitorId);
  }
}
