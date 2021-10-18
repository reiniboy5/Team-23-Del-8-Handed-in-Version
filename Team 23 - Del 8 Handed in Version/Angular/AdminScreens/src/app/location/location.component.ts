import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { City } from '../model/Users/city';
import { Country } from '../model/Users/country';
import { Province } from '../model/Users/province';
import { Suburb } from '../model/Users/suburb';
import { LocationService } from '../shared/Location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  country;
  countryList: Country[];
  countries;
  provinces;
  cities;
  suburbs;

  provinceList: Province[];
  cityList: City[];
  suburbList: Suburb[];

  constructor(
    public locationService: LocationService,
    private httpService: HttpClient
  ) {}

  ngOnInit(): void {
    this.CountryForm();
    this.refreshCountryList();
    this.ProvinceForm();
    this.refreshProvinceList();
    this.CityForm();
    this.refreshCityList();
    this.SuburbForm();
    this.refreshSuburbList();

    this.httpService
      .get('https://localhost:44312/api/Countries')
      .subscribe((res) => {
        this.countries = res as string[];
        console.log((this.countries = res as string[]));
      });

    this.httpService
      .get('https://localhost:44312/api/Provinces/getProvinces')
      .subscribe((res) => {
        this.provinces = res as string[];
        console.log((this.provinces = res as string[]));
      });

    this.httpService
      .get('https://localhost:44312/api/Cities/getCities')
      .subscribe((res) => {
        this.cities = res as string[];
        console.log((this.cities = res as string[]));
      });
    this.httpService
      .get('https://localhost:44312/api/Suburbs/getSuburbs')
      .subscribe((res) => {
        this.suburbs = res as string[];
        console.log((this.suburbs = res as string[]));
      });
  }

  CountryForm() {
    this.locationService.countryData = {
      CountryID: 0,
      CountryName: '',
    };

    this.locationService.countryList = [];
  }

  ProvinceForm() {
    this.locationService.provinceData = {
      ProvinceID: 0,
      ProvinceName: '',
      CountryID: 0,
    };

    this.locationService.provinceList = [];
  }

  CityForm() {
    this.locationService.cityData = {
      CityID: 0,
      CityName: '',
      ProvinceID: 0,
    };

    this.locationService.cityList = [];
  }

  SuburbForm() {
    this.locationService.suburbData = {
      SuburbID: 0,
      SuburbName: '',
      CityID: 0,
    };

    this.locationService.suburbList = [];
  }

  getProvince(CountryID) {
    this.locationService
      .getProvinceList(CountryID)
      .then((res) => (this.provinceList = res as Province[]));
  }

  getCity(CityID) {
    this.locationService
      .getCityList(CityID)
      .then((res) => (this.cityList = res as City[]));
  }

  refreshCountryList() {
    this.locationService
      .getCountries()
      .then((res) => (this.locationService.countryList = res as Country[]));
  }

  refreshProvinceList() {
    this.locationService
      .getProvinces()
      .then((res) => (this.locationService.provinceList = res as Province[]));
  }
  refreshCityList() {
    this.locationService
      .getCities()
      .then((res) => (this.locationService.cityList = res as City[]));
  }
  refreshSuburbList() {
    this.locationService
      .getSuburbs()
      .then((res) => (this.locationService.suburbList = res as Suburb[]));
  }
  // setCountryID(id){
  //   localStorage['CountryID'] = id;
  // }
  submit() {
    this.locationService
      .createCountry(this.locationService.countryData)
      .subscribe((res) => {
        console.log(res);
        this.CountryForm();
        this.refreshCountryList();
      });
    location.reload();
    // else {
    //   this.locationService
    //     .updateClient(this.clientService.clientData)
    //     .subscribe((res) => {
    //       this.resetForm();
    //       this.refreshList();
    //     });
    // }
  }
  submitProvince() {
    this.locationService
      .createProvince(this.locationService.provinceData)
      .subscribe((res) => {
        console.log(res);
        this.ProvinceForm();
        this.refreshProvinceList();
      });
    location.reload();
  }

  submitCity() {
    this.locationService
      .createCity(this.locationService.cityData)
      .subscribe((res) => {
        console.log(res);
        this.CityForm();
        this.refreshCityList();
      });
    location.reload();
  }
  submitSuburb() {
    this.locationService
      .createSuburb(this.locationService.suburbData)
      .subscribe((res) => {
        console.log(res);
        this.SuburbForm();
        this.refreshSuburbList();
      });
    location.reload();
  }

  setID(id) {
    localStorage['CountryID'] = id;
  }
}
