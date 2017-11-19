import {Component} from '@angular/core';
import {SocketService} from './core/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // need to inject socket service here so sockets can open
  constructor(private socketService: SocketService) { }
}
