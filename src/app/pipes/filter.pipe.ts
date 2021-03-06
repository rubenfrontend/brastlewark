import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterByName'
})
export class FilterNames implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) {return [];} 
    if(!searchText) {return items;} 
    return items.filter(item => item.name.toLowerCase().includes(searchText));
  }
}
