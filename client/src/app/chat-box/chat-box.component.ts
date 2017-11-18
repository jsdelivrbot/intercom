import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ConversationService} from '../core/conversation.service';
import { Message } from '../core/message.model';
import {Subscription} from 'rxjs/Subscription';
import {MessengerService} from '../core/messenger.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit, OnDestroy, OnChanges {

  messages: Message[] = [];

  visitorId: string;
  visitorName: string;

  constructor(public conversationService: ConversationService, private messengerService: MessengerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.visitorId = params.id;
      console.log(this.conversationService.threads[this.visitorId])
      this.visitorName = this.conversationService.threads[this.visitorId].visitor.name;

      this.messages = this.conversationService
        .getLog(params.id)
    });
  }

  userType(id) {
    return id === this.conversationService.adminId ? 'admin' : 'visitor';
  }

  send(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      const msg = new Message(this.conversationService.adminId, e.target.value);

      // send new message to visitor
      this.messengerService.sendMessage(msg);

      // add new message to the conversation log
      this.conversationService.addToLog(this.visitorId, msg);
      e.target.value = '';
    }
  }

  ngOnChanges() {
    console.log('on change')
  }

  ngOnDestroy() {
    console.log('on destroy triggered?')
    // this.conversationService.setLastSeen(this.visitorId);
  }
}
