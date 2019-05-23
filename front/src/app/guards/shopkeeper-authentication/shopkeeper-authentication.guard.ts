import { ConfigurationService } from './../../services/configuration/configuration.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopkeeperAuthenticationGuard implements CanActivate {
  currentUser: any;
  constructor(private configurationService: ConfigurationService) {
    this.currentUser = configurationService.currentUser;
  }

  canActivate() {
    return this.currentUser && this.currentUser.type === 'admin';
  }
}
