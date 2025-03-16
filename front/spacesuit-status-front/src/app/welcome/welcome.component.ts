import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HasRolesDirective } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-welcome',
  imports: [
    MatIcon,
    RouterLink,
    RouterLinkActive,
    MatButton,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.less',
})
export class WelcomeComponent {
  private readonly keycloak = inject(Keycloak);
  isAuthenticated(){
    return this.keycloak.authenticated;
  }
}
