import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome1Component } from './page-home1.component';

describe('PageHome1Component', () => {
  let component: PageHome1Component;
  let fixture: ComponentFixture<PageHome1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHome1Component]
    });
    fixture = TestBed.createComponent(PageHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
