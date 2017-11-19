import { Pipe, PipeTransform } from '@angular/core';
import {Conversation} from './models/conversation.model';

@Pipe({
  name: 'sortByLatest',
  pure: false
})
export class SortByLatestPipe implements PipeTransform {

  transform(conversations: Conversation[]): any {
    return conversations.sort((a, b) => {
      const timeA = a.latestTime;
      const timeB = b.latestTime;
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
