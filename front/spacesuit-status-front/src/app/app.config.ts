import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { includeBearerTokenInterceptor } from 'keycloak-angular';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideKeycloakAngular } from './keycloack.config';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RoutePersistenceService } from './services/route-persistence.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    provideToastr({
      positionClass: 'toast-bottom-center',
    }),
    RoutePersistenceService
  ],
};
