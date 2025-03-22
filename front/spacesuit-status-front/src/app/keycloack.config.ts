import { environment } from '../environments/environment';
import {
  provideKeycloak,
  createInterceptorCondition,
    IncludeBearerTokenCondition,
    INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
    withAutoRefreshToken,
    AutoRefreshTokenService,
    UserActivityService
  } from 'keycloak-angular';
  
  const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
    urlPattern: /^(http:\/\/localhost:8080)(\/.*)?$/i,
    bearerPrefix: 'Bearer'
  });
  
  export const provideKeycloakAngular = () =>
    provideKeycloak({
      config: {
        realm: environment.realm,
        url: environment.keycloackUrl,
        clientId: environment.clientId
      },
      initOptions: {        
        onLoad: 'check-sso',
        redirectUri: window.location.origin + '/',
        checkLoginIframe: false 
      },
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'logout',
          sessionTimeout: 100000
        })
      ],
      providers: [
        AutoRefreshTokenService,
        UserActivityService,
        {
          provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
          useValue: [urlCondition]
        }
      ]
    });