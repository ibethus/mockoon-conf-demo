import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HasRolesDirective } from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    HasRolesDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  constructor(keycloak: Keycloak) {
    this.keycloak = keycloak;
    keycloak.loadUserProfile().then((res) => (this.username = res.username));
  }
  keycloak: Keycloak;
  username: string | undefined;
}
