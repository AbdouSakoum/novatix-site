import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider3Component } from './section-slider3.component';

describe('SectionSlider3Component', () => {
  let component: SectionSlider3Component;
  let fixture: ComponentFixture<SectionSlider3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSlider3Component]
    });
    fixture = TestBed.createComponent(SectionSlider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
