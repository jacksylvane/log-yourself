import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    console.log(items);
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    const found = items.filter(it => {
      it = it.week.toString();
      if (it.toLowerCase().includes(searchText)) {
        return true;
      } else {
        return false;
      }
    });

    if (found.length === 0 ) {
      return [-1];
    }
      return found;
  }
}
