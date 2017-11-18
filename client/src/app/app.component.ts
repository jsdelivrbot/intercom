import {Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";
import {ChatData} from "./core/chat-data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public messages = [];
  public visitors = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages()
      .subscribe((data: ChatData) => {
      console.log('got some data', data)
        if (this.visitors.indexOf(data.visitor) === -1) {
          this.visitors.push(data.visitor);
        }
        this.messages.push(data);
      })
  }
}
