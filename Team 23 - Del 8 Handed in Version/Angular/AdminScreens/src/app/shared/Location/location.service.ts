import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from 'src/app/model/Users/city';
import { Country } from 'src/app/model/Users/country';
import { Province } from 'src/app/model/Users/province';
import { Suburb } from 'src/app/model/Users/suburb';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  countryData: Country;
  countryList: Country[];

  provinceData: Province;
  provinceList: Province[];

  cityData: City;
  cityList: City[];

  suburbData: Suburb;
  suburbList: Suburb[];

  constructor(public http: HttpClient) {}
  getCountries() {
    return this.http.get(environment.apiUrl + 'Country').toPromise();
  }

  createCountry(obj: Country) {
    return this.http.post(environment.apiUrl + 'Country', obj);
  }

  getProvinces() {
    return this.http.get(environment.apiUrl + 'Province').toPromise();
  }

  createProvince(obj: Province) {
    return this.http.post('https://localhost:44312/api/Provinces', obj);
  }

  getProvinceList(id) {
    return this.http
      .get('https://localhost:44312/api/Provinces/getProvince/' + id)
      .toPromise();
  }
  getCities() {
    return this.http.get('https://localhost:44312/api/Cities').toPromise();
  }
  createCity(obj: City) {
    return this.http.post('https://localhost:44312/api/Cities', obj);
  }

  getSuburbs() {
    return this.http.get('https://localhost:44312/api/Suburbs').toPromise();
  }
  createSuburb(obj: Suburb) {
    return this.http.post('https://localhost:44312/api/Suburbs', obj);
  }
  getCityList(id) {
    return this.http
      .get('https://localhost:44312/api/Cities/getCities/' + id)
      .toPromise();
  }
}
