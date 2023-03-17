import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersEditComponent } from './publishers-edit.component';

describe('PublishersEditComponent', () => {
  let component: PublishersEditComponent;
  let fixture: ComponentFixture<PublishersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
