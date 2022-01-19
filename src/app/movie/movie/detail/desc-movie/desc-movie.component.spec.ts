import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescMovieComponent } from './desc-movie.component';

describe('DescMovieComponent', () => {
  let component: DescMovieComponent;
  let fixture: ComponentFixture<DescMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
