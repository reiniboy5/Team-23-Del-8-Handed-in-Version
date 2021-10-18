import { Pipe, PipeTransform } from '@angular/core';
import { ArtClass } from 'src/app/model/ArtClasses/art-class';

@Pipe({
  name: 'artClassSearch'
})
export class ArtClassSearchPipe implements PipeTransform {

  transform(ArtClasses: ArtClass[], searchValue: string): ArtClass[] {
    if (!ArtClasses || !searchValue) {
      return ArtClasses;
    }
    return ArtClasses.filter(artClass => artClass.artClassName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
