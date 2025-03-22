import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RoutePersistenceService } from './services/route-persistence.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = 'My Clones Manager';

  constructor(
    private router: Router,
    private routePersistenceService: RoutePersistenceService
  ) {}

  ngOnInit(): void {
    if (window.location.hash === '') {
      const lastRoute = this.routePersistenceService.getLastRoute();
      if (lastRoute && lastRoute !== '/') {
        this.router.navigateByUrl(lastRoute);
      }
    }
  }
}
