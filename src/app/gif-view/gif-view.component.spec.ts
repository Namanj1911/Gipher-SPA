import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifViewComponent } from './gif-view.component';

describe('GifViewComponent', () => {
  let component: GifViewComponent;
  let fixture: ComponentFixture<GifViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
