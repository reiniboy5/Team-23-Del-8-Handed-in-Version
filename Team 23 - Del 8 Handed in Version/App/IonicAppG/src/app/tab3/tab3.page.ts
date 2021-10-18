import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchasesService } from './purchases.service';


export interface Purchase {
  PurchaseRequestID: number;
  FirstName: string;
  LastName: string;
  ContactNumber: string;
  Email: string;
  IDNumber: string;
  ArtworkID: number
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {

  purchase;
  constructor(private httpService: HttpClient, public service: PurchasesService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.service.purchaseData = {
      PurchaseRequestID: 0,
      FirstName: "",
      LastName: "",
      ContactNumber: "",
      Email: "",
      IDNumber:"",
      ArtworkID: localStorage["ArtworkID"]
    }
    this.service.purchasList = [];
  }

  resetForm(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.service.purchaseData = {
      PurchaseRequestID: 0,
      FirstName: "",
      LastName: "",
      ContactNumber: "",
      Email: "",
      IDNumber:"",
      ArtworkID: localStorage["ArtworkID"]
    }
    this.service.purchasList = [];
  }

  refreshPage(){
    location.reload();
  }
  
onSubmit(){

  this.service.CapturePurchase(this.service.purchaseData).subscribe(res => {
    console.log(res);
  })
 
  this.changeStatus();
  this.router.navigate(['/tabs/tab2']).then(() => location.reload());



 
}

changeStatus(){
  this.httpService
  .get('https://localhost:44312/api/PurchaseRequests/ArtOnHold/' + localStorage.ArtworkID)
  .subscribe((res) => {
 console.log(res)
  });
}


}

