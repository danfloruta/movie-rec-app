import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSpecificComponent } from './genre-specific.component';

describe('GenreSpecificComponent', () => {
  let component: GenreSpecificComponent;
  let fixture: ComponentFixture<GenreSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreSpecificComponent]
    });
    fixture = TestBed.createComponent(GenreSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
