import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Moment from 'moment';
import { CalendarDay } from './calendar-day-model';
import { CalendarEvent } from './calendar-event-model';
import { ChunkCalendarDaysPipe } from './pipes/chunk-calendar-days.pipe';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ChunkCalendarDaysPipe],
})
export class CalendarComponent implements OnInit {
  @Input() calendarTitleDisplay: string = 'May';
  @Input() calendarTitleDays: string[] = [
    'SUN',
    'MON',
    'TUE',
    'WEB',
    'THUR',
    'FRI',
    'SAT',
  ];
  @Input() calendarStart: string = '05/01/2022';
  @Input() calendarCurrentMonthStart: string = '05/01/2022';
  @Input() calendarNextMonthStart: string = '06/01/2022';
  @Input() calendarEvents: CalendarEvent[] = [
    { id: '1', title: 'Circus', start: '05/03/2022', end: '05/03/2022' },
    { id: '2', title: 'Breakfast', start: '05/10/2022', end: '05/10/2022' },
    { id: '3', title: 'Lunch', start: '05/10/2022', end: '05/10/2022' },
    { id: '3', title: 'Dinner', start: '05/10/2022', end: '05/10/2022' },
  ];

  calendar: CalendarDay[] = [];

  constructor(
    private readonly titleService: Title,
    private readonly chunkCalendarDays: ChunkCalendarDaysPipe
  ) {
    this.titleService.setTitle('Calendar');
  }

  ngOnInit(): void {
    this.calendar = this.generateCalendarDays();
  }

  private generateCalendarDays(): CalendarDay[] {
    const calendarDays: CalendarDay[] = [];
    let dateToAdd = Moment(this.calendarStart).format('YYYY-MM-DD');
    for (let i = 0; i < 42; i++) {
      calendarDays.push(
        new CalendarDay(
          dateToAdd,
          this.calendarCurrentMonthStart,
          this.calendarNextMonthStart
        )
      );
      dateToAdd = Moment(dateToAdd).add(1, 'd').format('YYYY-MM-DD');
    }
    return calendarDays;
  }
}
