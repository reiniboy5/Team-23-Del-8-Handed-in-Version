import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BuyModalPage } from '../buy-modal/buy-modal.page';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;

  artwork;

  constructor(public photoService: PhotoService, private httpService: HttpClient, private router: Router) {  }

  ngOnInit() {
    this.photoService.loadSaved();
    this.httpService
    .get('https://localhost:44312/api/Artworks/getArtwork')
    .subscribe((res) => {
      this.artwork = res as string[];
      console.log((this.artwork = res as string[]));
    });
  }

  storeArtwork(id){
    localStorage["ArtworkID"] = id;
this.router.navigate(['/tabs/tab3'])
  }



}