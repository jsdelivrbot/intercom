import { Pipe, PipeTransform } from '@angular/core';
import {Conversation} from './models/conversation.model';

@Pipe({
  name: 'sortByLatest',
  pure: false
})
export class SortByLatestPipe implements PipeTransform {

  // Sort conversations with the latest on top
  transform(conversations: Conversation[]): any {
    return conversations.sort((a, b) => {
      const timeA = a.latestMessage.timestamp;
      const timeB = b.latestMessage.timestamp;
      if (timeA > timeB) {
        return -1;
      }
      if (timeA < timeB) {
        return 1;
      }
      return 0;
    });
  }
}
