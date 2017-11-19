import { Pipe, PipeTransform } from '@angular/core';
import {Conversation} from '../models/conversation.model';

@Pipe({
  name: 'sortByLatest',
  pure: false
})
export class SortByLatestPipe implements PipeTransform {

  // Sort conversations with the latest *from a visitor* on top
  transform(conversations: Conversation[]): any {
    return conversations.sort((a, b) => {
      const aliasA = a.latestMessage.userAlias;
      const aliasB = b.latestMessage.userAlias;


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
