import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationsService {
  timestamp: Date;
  datestripped: string;
  minnumber : any;

  constructor() {

   }


  static max(max: number): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {
    
      let val: number = control.value;
    
      if (control.pristine || control.pristine) {
        return null;
      }
      if (val <= max) {
        return null;
      }
      return { 'max': true };
      }
    }
    
     static min(min: any): ValidatorFn {
    return (control: FormControl): { [key: string]: boolean } | null => {
    
      let val: any = control.value;

      let valuemonth: string = val.substring(0,2).replace(/^0+/,'');
      let valueyear: string = val.substring(2,4);
      let minmonth: string = min.substring(0,2).replace(/^0+/,'');
      let minyear: string = min.substring(2,4); 

      let valuedate: string = val.substring(2,4) + val.substring(0,2);

      let mindate: string = min.substring(2,4) + min.substring(0,2);
      
console.log('minmonth:', minmonth ,'minyear:', minyear );

console.log('valuemonth:', valuemonth ,'valueyear:', valueyear );

console.log('valuedate:', valuedate ,'mindate:', mindate );

      if (control.pristine || control.pristine) {
        return null;
      }

      if(val.length < 4){

        return null;

      }

      if ( valuedate >= mindate  ) {

        return null;
      }

      return { 'min': true };

      }
    }
}
