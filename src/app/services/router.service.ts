import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToDashboard(): any{
    this.router.navigate(['/trending']);
  }

  routeToLogin(): any{
    this.router.navigate(['/login']);
  }

  routeToSearchView(): any{
    this.router.navigate(['/searchView']);
  }

  routeToFavourites(): any{
    this.router.navigate(['/favourites']);
  }
}
