import {Component, OnInit} from '@angular/core';
import {MessengerService} from './core/messenger.service';
import {ConversationService} from './core/conversation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private messengerService: MessengerService, public chatLogService: ConversationService) { }

  ngOnInit() {
    // this.messengerService.getMessages()
    //   .subscribe((data: Message) => {
    //   console.log('got some data', data);
    //     this.chatLogService.addToLog(data.userId, data);
    //
    //   })
  }
}
