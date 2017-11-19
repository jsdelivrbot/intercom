import { Component, OnInit } from '@angular/core';
import {ConversationService} from '../core/conversation.service';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {

  conversations;

  constructor(public conversationService: ConversationService) { }

  ngOnInit() {
    this.conversations = this.conversationService.getAllConversations();
  }
}
