import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersAddComponent } from './publishers-add.component';

describe('PublishersAddComponent', () => {
  let component: PublishersAddComponent;
  let fixture: ComponentFixture<PublishersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
