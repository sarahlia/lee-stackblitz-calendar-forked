import Moment from 'moment';

export class CalendarDay {
  date: Moment.Moment;
  title: string = '';
  isPastDate: boolean;
  isLastMonthDate: boolean;
  isNextMonthDate: boolean;
  isCurrentMonthDate: boolean;
  isToday: boolean;

  constructor(
    currentDate: string,
    calendarStartDate: string,
    calendarEndDate: string
  ) {
    this.date = Moment(currentDate);
    this.isPastDate = Moment(currentDate).isBefore(Moment());
    this.isLastMonthDate = Moment(currentDate).isBefore(
      Moment(calendarStartDate)
    );
    this.isNextMonthDate =
      Moment(currentDate).isAfter(Moment(calendarEndDate)) ||
      Moment(currentDate).isSame(Moment(calendarEndDate));
    this.isCurrentMonthDate = !this.isLastMonthDate && !this.isNextMonthDate;
    this.isToday = Moment(currentDate).isSame(Moment());
  }
}
