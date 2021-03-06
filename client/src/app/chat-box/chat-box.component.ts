import {Component, OnInit} from '@angular/core';
import {ConversationService} from '../core/conversation.service';
import {Message} from '../core/models/message.model';
import {SocketService} from '../core/socket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/user.service';
import {User} from '../core/models/user.model';
import {Conversation} from '../core/models/conversation.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  public conversation: Conversation;

  constructor(public conversationService: ConversationService, public userService: UserService, private socketService: SocketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.conversation = this.conversationService.getConversation(params.id);

      // If url contains invalid user ID
      if (this.conversation === null) {
        this.router.navigateByUrl('/');
        return;
      }
    });
  }

  private scrollToBottom(): void {
    const el = document.getElementById('chat-box');
    el.scrollTop = el.scrollHeight;
  }

  send(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      const msg = new Message(this.userService.admin, e.target.value);

      // send new message to visitor
      this.socketService.sendMessage(this.conversation.visitor.id, msg);

      // add new message to the conversation log
      this.conversationService.addNewMessage(this.conversation.visitor.id, msg);
      e.target.value = '';

      // Scroll chat window to bottom
      this.scrollToBottom();
    }
  }
}
