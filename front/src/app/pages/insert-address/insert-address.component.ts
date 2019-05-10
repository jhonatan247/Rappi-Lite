import { Component, ViewChild } from '@angular/core';
import { AddressService } from '../../services/address/address.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-address',
  templateUrl: './insert-address.component.html',
  styleUrls: ['./insert-address.component.sass']
})
export class InsertAddressComponent {
  @ViewChild('gmap') gmapElement: any;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  address: string = '';

  constructor(
    public addressService: AddressService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.findMe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
  }

  saveAddress() {
    console.log(this.authenticationService.currentUser);
    this.addressService
      .CreateAddressUser(
        this.authenticationService.currentUser.id,
        this.address,
        this.currentLat,
        this.currentLong
      )
      .then(data => {
        this.router.navigate(['home-user']);
      })
      .catch(error => {
        alert('An error has ocurred: ' + error);
      });
  }
}
