import { Pipe, PipeTransform } from '@angular/core';
import { CalendarDay } from '../calendar-day-model';

@Pipe({
  name: 'chunkCalendarDays',
})
export class ChunkCalendarDaysPipe implements PipeTransform {
  transform(
    calendarDaysArray: CalendarDay[],
    chunkSize: number
  ): CalendarDay[][] {
    const calendarDays: CalendarDay[][] = [];
    let weekDays: CalendarDay[] = [];

    calendarDaysArray.map((day, index) => {
      weekDays.push(day);
      if (++index % chunkSize === 0) {
        calendarDays.push(weekDays);
        weekDays = [];
      }
    });
    return calendarDays;
  }
}
