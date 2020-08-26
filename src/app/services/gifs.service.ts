import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gif } from '../gif';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url = 'api.giphy.com/v1/gifs';

  constructor(private httpClient: HttpClient) { }

  getGifs(): any{
    return this.httpClient.get('http://api.giphy.com/v1/gifs/trending?api_key=tkVQApdirCbu2jYDy5CK43ct4n8xKWj2&limit=25');
  }

  getSearchQuery(query: string): any{
    return this.httpClient.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=tkVQApdirCbu2jYDy5CK43ct4n8xKWj2&limit=25`);
  }
}
