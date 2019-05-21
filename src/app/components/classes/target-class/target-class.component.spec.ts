import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetClassComponent } from './target-class.component';

describe('TargetClassComponent', () => {
  let component: TargetClassComponent;
  let fixture: ComponentFixture<TargetClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
