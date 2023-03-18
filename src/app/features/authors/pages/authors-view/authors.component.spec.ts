import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsViewComponent } from './authors-view.component';

describe('AuthorsComponent', () => {
  let component: AuthorsViewComponent;
  let fixture: ComponentFixture<AuthorsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
