import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  template: '',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  constructor(router: Router) {
    router.navigate(['/']);
  }
}
