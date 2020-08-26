import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public subject = new BehaviorSubject<any>('');

  constructor() { }

  sendDataToSubject(data): void{
    this.subject.next(data);
  }
}
