import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gif-view',
  templateUrl: './gif-view.component.html',
  styleUrls: ['./gif-view.component.css']
})
export class GifViewComponent implements OnInit {

  gifs: Array<Gif> = [];
  key = 'data';

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
    this.gifsService.getGifs().subscribe(
      v => {
        this.gifs = v[this.key];
      }, error => {
        console.log(error.message);
      });
  }

}
