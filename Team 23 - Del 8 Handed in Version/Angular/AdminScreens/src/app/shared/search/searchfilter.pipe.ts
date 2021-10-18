import { Pipe, PipeTransform } from '@angular/core';
import { ClassTeacher } from 'src/app/model/ArtClasses/class-teacher';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Teacher: ClassTeacher[], searchValue: string): ClassTeacher[] {
    if (!Teacher || !searchValue) {
      return Teacher;
    }
    return Teacher.filter(teach => teach.teacherName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
    teach.teacherSurname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
