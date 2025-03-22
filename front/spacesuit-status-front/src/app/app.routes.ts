import { Routes } from '@angular/router';
import { canActivateAuthRole } from './auth/auth.guard';
import { SuitsComponent } from './suits-module/suits/suits.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { SuitComponent } from './suits-module/suit/suit.component';
import { CheckupComponent } from './mission/checkup/checkup.component';

export const routes: Routes = [
  {
    path: 'suits',
    component: SuitsComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'sith' },
  },
  {
    path: 'suits/:suitId',
    component: SuitComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'sith' },
  },
  {
    path: 'mission/:suitId',
    component: CheckupComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'sith' },
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'sith' },
  },
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: '**', component: NotFoundComponent },
];
