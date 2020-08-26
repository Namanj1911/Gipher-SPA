import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  searchGif(value: string): void {
    this.searchService.sendDataToSubject(value);
    this.router.navigate(['/searchView']);
  }

}
