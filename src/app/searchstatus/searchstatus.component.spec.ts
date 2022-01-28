import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstatusComponent } from './searchstatus.component';

describe('SearchstatusComponent', () => {
  let component: SearchstatusComponent;
  let fixture: ComponentFixture<SearchstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
