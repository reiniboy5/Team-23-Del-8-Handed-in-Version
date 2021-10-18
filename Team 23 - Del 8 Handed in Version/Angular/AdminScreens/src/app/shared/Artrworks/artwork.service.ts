import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artwork } from 'src/app/model/Artworks/artwork';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  artworkData: Artwork = new Artwork();
  artworkList: Artwork[];
  selectedArtwork: Artwork;
  constructor(private http: HttpClient) { }

  getMediumType(){
    return this.http.get(environment.apiUrl + 'MediumType')
  }

  getSurfaceType() {
    return this.http.get(environment.apiUrl + 'SurfaceType')
  }

  getDimensions() {
    return this.http.get(environment.apiUrl + 'ArtworkDimension')
  }

  getArtworks(){
    return this.http.get(environment.apiUrl + 'Artwork').toPromise().then(res =>{
      this.artworkList = res as Artwork[];
    });
  }

  postArtwork(artwork: Artwork){
    return this.http.post(environment.apiUrl + 'Artwork/', artwork)
  }

  putArtwork(newArtwork: Artwork) {
    return this.http.put(environment.apiUrl + 'Artwork/' + newArtwork.artworkID, newArtwork)
  }

  deleteArtwork(id: number){
    return this.http.delete(environment.apiUrl + 'Artwork/' + id)
  }
}
