import {Component, OnInit} from '@angular/core';
import {SocketService} from './core/socket.service';
import {ConversationService} from './core/conversation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private socketService: SocketService, public chatLogService: ConversationService) { }

  ngOnInit() {
    // this.messengerService.getMessages()
    //   .subscribe((data: IMessage) => {
    //   console.log('got some data', data);
    //     this.chatLogService.addToLog(data.userId, data);
    //
    //   })
  }
}
