import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ConversationService} from '../core/conversation.service';
import { Message } from '../core/models/message.model';
import {Subscription} from 'rxjs/Subscription';
import {SocketService} from '../core/socket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/user.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit, OnDestroy, OnChanges {

  messages: Message[] = [];

  visitorId: string;
  visitorName: string;

  constructor(public conversationService: ConversationService, public userService: UserService, private socketService: SocketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.visitorId = params.id;
      const currConvo = this.conversationService.getConversation(this.visitorId);

      // If url contains invalid user ID
      if (currConvo === null) {
        this.router.navigateByUrl('/');
        return;
      }

      this.visitorName = currConvo.visitor.alias;
      this.messages = currConvo.log;
    });
  }

  userType(id) {
    return id === this.userService.admin.id ? 'admin' : 'visitor';
  }

  send(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      const msg = new Message(this.userService.admin.id, e.target.value);

      // send new message to visitor
      this.socketService.sendMessage(msg);

      // add new message to the conversation log
      this.conversationService.addNewMessage(this.visitorId, msg);
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
