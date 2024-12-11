import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuthorsComponent } from './update-authors.component';

describe('UpdateAuthorsComponent', () => {
  let component: UpdateAuthorsComponent;
  let fixture: ComponentFixture<UpdateAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAuthorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
