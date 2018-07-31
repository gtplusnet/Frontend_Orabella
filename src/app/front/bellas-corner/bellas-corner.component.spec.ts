import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellasCornerComponent } from './bellas-corner.component';

describe('BellasCornerComponent', () => {
  let component: BellasCornerComponent;
  let fixture: ComponentFixture<BellasCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellasCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellasCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
