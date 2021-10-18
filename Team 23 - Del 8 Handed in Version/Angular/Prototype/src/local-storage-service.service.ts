import {  Inject,Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


const STORAGE_KEY = 'userdata';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }
}
