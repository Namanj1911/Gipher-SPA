import { Component, OnInit, Input } from '@angular/core';
import { FavService } from '../services/fav.service';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  constructor(private favService: FavService, private authService: AuthenticationService, private routerservice: RouterService) { }

  @Input()
  giphy;

  ngOnInit(): void {
  }

  addToFav(data): void{
    if (this.authService.isAuthenticated()) {
      console.log('Fav button clicked');
      this.favService.addFav(data);
    } else {
      console.log('routing to login');
      this.routerservice.routeToLogin();
    }

  }

}
