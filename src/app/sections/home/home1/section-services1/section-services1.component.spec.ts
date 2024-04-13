import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices1Component } from './section-services1.component';

describe('SectionServices1Component', () => {
  let component: SectionServices1Component;
  let fixture: ComponentFixture<SectionServices1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionServices1Component]
    });
    fixture = TestBed.createComponent(SectionServices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
