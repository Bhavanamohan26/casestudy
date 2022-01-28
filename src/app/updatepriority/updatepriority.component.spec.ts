import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepriorityComponent } from './updatepriority.component';

describe('UpdatepriorityComponent', () => {
  let component: UpdatepriorityComponent;
  let fixture: ComponentFixture<UpdatepriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
