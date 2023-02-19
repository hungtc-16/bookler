import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompactComponent } from './layout-compact.component';

describe('LayoutCompactComponent', () => {
  let component: LayoutCompactComponent;
  let fixture: ComponentFixture<LayoutCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCompactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
