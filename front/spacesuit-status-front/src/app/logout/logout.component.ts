import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-logout',
  imports: [],
  template: '',
  styleUrl: './logout.component.less',
})
export class LogoutComponent {
  constructor(Keycloak: Keycloak, Router: Router) {
    Keycloak.logout();
    Router.navigate(['/']);
  }
}
