import { Pipe, PipeTransform } from '@angular/core';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';

@Pipe({
  name: 'exhibitionsearch'
})
export class ExhibitionsearchPipe implements PipeTransform {

  transform(Exhibitions: Exhibition[], searchValue: string): Exhibition[] {
    if (!Exhibitions || !searchValue) {
      return Exhibitions;
    }
    return Exhibitions.filter(exhibition => exhibition.exhibitionName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
