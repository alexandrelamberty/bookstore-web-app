import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresViewComponent } from './genres-view.component';

describe('GenresViewComponent', () => {
  let component: GenresViewComponent;
  let fixture: ComponentFixture<GenresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenresViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
