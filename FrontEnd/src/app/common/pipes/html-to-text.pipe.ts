import { Pipe, PipeTransform } from '@angular/core';
import { Utilities } from '../Utilities/Utilities';
@Pipe({
  name: 'htmlToText'
})
export class HtmlToTextPipe implements PipeTransform {

  transform(html: string): string {
    return Utilities.htmlToText(html);
  }
}
