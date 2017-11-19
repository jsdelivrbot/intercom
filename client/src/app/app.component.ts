import {Component, OnInit} from '@angular/core';
import {SocketService} from './core/socket.service';
import {ConversationService} from './core/conversation.service';
import {UserService} from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  conversations;

  constructor(private socketService: SocketService, public conversationService: ConversationService, public userService: UserService) { }

  ngOnInit() {
    this.conversations = this.conversationService.getAllConversations();
  }
}
