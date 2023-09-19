import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number, hasTime:boolean = true): string {
    const milliseconds = value *1000
    const date = new Date(milliseconds);
    let dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    if (hasTime) {
      dateString += ' ' + 'Time:'+ date.getHours() + ':' + (date.getMinutes().toString().length>1 ? date.getMinutes() : ('0' + date.getMinutes()))
    }
    return dateString;
  }

}
