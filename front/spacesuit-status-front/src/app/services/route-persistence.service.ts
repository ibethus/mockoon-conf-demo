import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutePersistenceService {
  private readonly ROUTE_KEY = 'last-route';

  constructor(private router: Router) {
    // Sauvegarde chaque route visitée
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Ne stocke pas les routes spéciales comme login/logout
      if (!['login', 'logout', 'forbidden'].includes(this.getRouteWithoutHash(event.url))) {
        localStorage.setItem(this.ROUTE_KEY, event.url);
      }
    });
  }

  private getRouteWithoutHash(url: string): string {
    // Supprime le # et retourne la partie path uniquement
    return url.replace(/^#?\/?/, '').split('/')[0];
  }

  getLastRoute(): string {
    return localStorage.getItem(this.ROUTE_KEY) || '/';
  }
}