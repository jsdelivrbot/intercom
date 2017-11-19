import {Component, OnInit} from '@angular/core';
import {ConversationService} from '../core/conversation.service';
import {Message} from '../core/models/message.model';
import {SocketService} from '../core/socket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/user.service';
import {User} from '../core/models/user.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  messages: Message[] = [];

  visitor: User;

  constructor(public conversationService: ConversationService, public userService: UserService, private socketService: SocketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const currConvo = this.conversationService.getConversation(params.id);

      // If url contains invalid user ID
      if (currConvo === null) {
        this.router.navigateByUrl('/');
        return;
      }

      this.visitor = currConvo.visitor;
      this.messages = currConvo.log;
    });
  }

  send(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      const msg = new Message(this.userService.admin, e.target.value);

      // send new message to visitor
      this.socketService.sendMessage(msg);

      // add new message to the conversation log
      this.conversationService.addNewMessage(this.visitor.id, msg);
      e.target.value = '';
    }
  }
}
