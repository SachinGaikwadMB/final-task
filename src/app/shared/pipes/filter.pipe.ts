import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string){
    
    if(value.length === 0 || filterString ==='') {
      return value;
    }

    const movies : any = [];
    for(let movie of value) {
      if(movie['category'].includes(filterString)) {
        movies.push(movie);
      }
    }
    
    return movies;
  }

}
