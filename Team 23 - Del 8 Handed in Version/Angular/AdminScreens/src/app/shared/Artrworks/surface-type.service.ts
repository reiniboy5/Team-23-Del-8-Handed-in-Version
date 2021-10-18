import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SurfaceType } from 'src/app/model/Artworks/surface-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SurfaceTypeService {
  surfaceData: SurfaceType = new SurfaceType();
  surfaceList: SurfaceType[];
  constructor(private http: HttpClient) {}

  getSurfaces() {
    return this.http
      .get(environment.apiUrl + 'SurfaceType')
      .toPromise()
      .then((res) => {
        this.surfaceList = res as SurfaceType[];
      });
  }

  postSurface(surface: SurfaceType) {
    return this.http.post(environment.apiUrl + 'SurfaceType/', surface);
  }

  deleteSurface(id: number) {
    return this.http.delete(environment.apiUrl + 'SurfaceType/' + id);
  }
}
