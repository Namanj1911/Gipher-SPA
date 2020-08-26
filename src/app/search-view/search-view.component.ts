import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../gif';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  public recieved: string;
  public searchedGifs: Array<Gif> = [];
  key = 'data';

  constructor(private searchService: SearchService, private gifsService: GifsService) { }

  ngOnInit(): void {
    this.searchService.subject.subscribe(data => {
      this.recieved = data;
      this.updateArray(data);
    }, error => {
      console.log(error.message);
    });
  }

  updateArray(value): any {
    this.gifsService.getSearchQuery(value).subscribe(v => {
      this.searchedGifs = v[this.key];
    }, error => {
      console.log(error.message);
    });
  }

}
