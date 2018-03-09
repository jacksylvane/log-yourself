import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'week' })
export class WeekPipe implements PipeTransform {
  transform(value: Date): number {
    return this.getWeekNumber(value);
  }

  // ISO WEEK - source: http://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
  getWeekNumber(d: Date): number {
    // Copy date so don't modify original
    let x = new Date(+d);
    x.setHours(0, 0, 0);
    x = new Date(Date.UTC(x.getFullYear(), x.getMonth(), x.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    x.setUTCDate(x.getUTCDate() + 4 - (x.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(x.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil((((x.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return week number
    return weekNo;
  }
}
