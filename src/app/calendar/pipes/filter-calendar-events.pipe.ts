import { Pipe, PipeTransform } from '@angular/core';
import Moment from 'moment';
import { CalendarEvent } from '../calendar-event-model';

@Pipe({
  name: 'filterCalendarEvents',
})
export class FilterCalendarEventsPipe implements PipeTransform {
  transform(
    calendarEvents: CalendarEvent[],
    calendarDayDate: Moment.Moment
  ): CalendarEvent[] {
    const filteredEvents = calendarEvents.filter((calendarEvent) => {
      return Moment(calendarEvent.start).isSame(calendarDayDate);
    });
    return filteredEvents;
  }
}
