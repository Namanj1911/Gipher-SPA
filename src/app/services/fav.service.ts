import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  public favourite = new BehaviorSubject<any>('');
  nameOfUser: string;

  constructor(private httpClient: HttpClient, private authService: AuthenticationService, private routeService: RouterService) { }

  username(name): any{
    this.nameOfUser = name;
  }

  getAllFavs(): any{
    this.httpClient.get(`http://localhost:3000/${this.nameOfUser}`).subscribe(data => {
      this.favourite.next(data);
    }, error => {
      console.log(error.message);
    });
  }

  getAllFav(): any{
    return this.httpClient.get(`http://localhost:3000/${this.nameOfUser}`);
  }

  addFav(data): any{
    this.httpClient.post(`http://localhost:3000/${this.nameOfUser}`, data).subscribe(value => {
      console.log(value);
    });
  }

  deleteFav(data): any{
    this.httpClient.delete(`http://localhost:3000/${this.nameOfUser}/${data.id}`).subscribe(value => {
      console.log(value);
    });
  }

}
