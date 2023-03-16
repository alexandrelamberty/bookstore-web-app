import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersViewComponent } from './publishers-view.component';

describe('PublishersViewComponent', () => {
  let component: PublishersViewComponent;
  let fixture: ComponentFixture<PublishersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishersViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
