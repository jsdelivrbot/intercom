import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ConversationService} from '../core/conversation.service';
import { Message } from '../core/models/message.model';
import {Subscription} from 'rxjs/Subscription';
import {SocketService} from '../core/socket.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit, OnDestroy, OnChanges {

  messages: Message[] = [];

  visitorId: string;
  visitorName: string;

  constructor(public conversationService: ConversationService, private socketService: SocketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // TODO: find out if there's a better way to do this
      if (!this.conversationService.threads.hasOwnProperty(params.id)) {
        this.router.navigateByUrl('/');
        return;
      }

      this.visitorId = params.id;
      console.log(this.conversationService.threads);
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
      this.socketService.sendMessage(msg);

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
