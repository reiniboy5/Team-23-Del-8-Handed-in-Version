import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {

  id;

  sub;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private data: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.sub = this.activatedRoute.paramMap.subscribe(
      params=>{
        this.id = params.get('id');

        this.onSubmit(this.id);


      }
    );
  }

  onSubmit(id){

  

    this.data.verifyAccount(id).then(success => {

      this.toastr.success("Account has been verified", 'Success', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',



        });
   
        this.router.navigate(['/login']);

      }).catch(error => {

  console.log(error.error);

        this.toastr.error(error.error, 'Error', {
          disableTimeOut: true,
          tapToDismiss: false,
          closeButton: true,
          positionClass: 'toast-top-full-width',
          enableHtml: true

        });

       

        this.router.navigate(['/login']);

      });



    

}

}
