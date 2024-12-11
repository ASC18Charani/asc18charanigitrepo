import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLearnersComponent } from './update-learners.component';

describe('UpdateLearnersComponent', () => {
  let component: UpdateLearnersComponent;
  let fixture: ComponentFixture<UpdateLearnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLearnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLearnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
