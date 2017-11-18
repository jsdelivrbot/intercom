import {Component, Input, OnInit} from '@angular/core';
import {ChatLogService} from "../../core/chat-log.service";
import {Message} from "../../core/message.model";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input() visitor: string;

  messages: Message[] = [];

  constructor(public chatLogService: ChatLogService) { }

  ngOnInit() {
    this.chatLogService.getLog(this.visitor)
      .subscribe(logs => {
        this.messages = logs;
      })
  }

}
