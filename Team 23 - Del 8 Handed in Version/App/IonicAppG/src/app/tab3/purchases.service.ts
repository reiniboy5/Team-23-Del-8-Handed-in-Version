import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Purchase } from './tab3.page';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  purchaseData: Purchase;
  purchasList: Purchase[];

  constructor(private http : HttpClient) { }


  CapturePurchase(obj: Purchase) {
    return this.http.post(environment.ApiURL + '/PurchaseRequests', obj);
  }
}
