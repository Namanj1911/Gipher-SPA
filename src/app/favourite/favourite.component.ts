import { Component, OnInit } from '@angular/core';
import { FavService } from '../services/fav.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public gifData;
  public favGifs: any = [];

  constructor(private favService: FavService, private routerService: RouterService) { }

  ngOnInit(): void {
    this.favService.getAllFav().subscribe(data => {
      this.favGifs = data;
      console.log(this.favGifs);
    });
  }

  delete(value): void{
    this.favService.deleteFav(value);
  }

}
