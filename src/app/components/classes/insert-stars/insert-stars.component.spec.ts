import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStarsComponent } from './insert-stars.component';

describe('InsertStarsComponent', () => {
  let component: InsertStarsComponent;
  let fixture: ComponentFixture<InsertStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
