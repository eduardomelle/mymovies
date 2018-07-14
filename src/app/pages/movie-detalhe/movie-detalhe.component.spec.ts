import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetalheComponent } from './movie-detalhe.component';

describe('MovieDetalheComponent', () => {
  let component: MovieDetalheComponent;
  let fixture: ComponentFixture<MovieDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
