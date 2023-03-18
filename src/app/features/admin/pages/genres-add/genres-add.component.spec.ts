import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresAddComponent } from './genres-add.component';

describe('GenresAddComponent', () => {
  let component: GenresAddComponent;
  let fixture: ComponentFixture<GenresAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
