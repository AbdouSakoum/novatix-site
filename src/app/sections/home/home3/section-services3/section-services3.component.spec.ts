import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices3Component } from './section-services3.component';

describe('SectionServices3Component', () => {
  let component: SectionServices3Component;
  let fixture: ComponentFixture<SectionServices3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionServices3Component]
    });
    fixture = TestBed.createComponent(SectionServices3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
