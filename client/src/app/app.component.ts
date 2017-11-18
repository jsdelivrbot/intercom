import {Component, OnInit} from '@angular/core';
import {MessengerService} from "./core/messenger.service";
import {Message} from "./core/message.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public messages = [];
  public visitors = [];

  constructor(private messengerService: MessengerService) { }

  ngOnInit() {
    this.messengerService.getMessages()
      .subscribe((data: Message) => {
      console.log('got some data', data)
        if (this.visitors.indexOf(data.userId) === -1) {
          this.visitors.push(data.userId);
        }
        this.messages.push(data);
      })
  }
}
