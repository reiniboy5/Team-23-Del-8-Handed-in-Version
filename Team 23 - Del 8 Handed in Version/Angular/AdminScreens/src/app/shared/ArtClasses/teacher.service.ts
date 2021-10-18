import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassTeacher } from 'src/app/model/ArtClasses/class-teacher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }
  teacherData: ClassTeacher = new ClassTeacher();
  teacherList: ClassTeacher[];
  selectedTeacher: ClassTeacher;

  getTeacherType(){
    return this.http.get(environment.apiUrl + 'TeacherType')
  }

  getTeachers(){
    return this.http.get(environment.apiUrl + 'ClassTeacher').toPromise().then(res =>{
      this.teacherList = res as ClassTeacher[];
    })
  }

  postTeacher(teacher: ClassTeacher) {
    return this.http.post(environment.apiUrl + 'ClassTeacher/', teacher)
    
  }

  putTeacher(newTeacher: ClassTeacher){
    console.log('NEW TEACHER:', newTeacher);
    return this.http.put(environment.apiUrl + 'ClassTeacher/' + newTeacher.classTeacherID, newTeacher)
  }

  deleteTeacher(id: number){
    return this.http.delete(environment.apiUrl + 'ClassTeacher/' + id)
  }
}
