import {Component, OnInit} from '@angular/core';
import {MessengerService} from "./core/messenger.service";
import {Message} from "./core/message.model";
import {ChatLogService} from "./core/chat-log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private messengerService: MessengerService, public chatLogService: ChatLogService) { }

  ngOnInit() {
    this.messengerService.getMessages()
      .subscribe((data: Message) => {
      console.log('got some data', data);
        this.chatLogService.addMessage(data.userId, data);

      })
  }
}
