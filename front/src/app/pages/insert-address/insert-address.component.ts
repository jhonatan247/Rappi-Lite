import { Component, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
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
  map: google.maps.Map;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;

  address: string = '';

  constructor(
    public addressService: AddressService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
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

    let location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    } else {
      this.marker.setPosition(location);
    }
  }

  saveAddress() {
    this.addressService
      .CreateAddressUser(
        this.authenticationService.currentUser.id,
        this.address,
        this.currentLat,
        this.currentLong
      )
      .then(data => {
        this.router.navigate(['home-user']);
      });
  }
}
