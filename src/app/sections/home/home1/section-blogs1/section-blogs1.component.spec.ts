import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogs1Component } from './section-blogs1.component';

describe('SectionBlogs1Component', () => {
  let component: SectionBlogs1Component;
  let fixture: ComponentFixture<SectionBlogs1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionBlogs1Component]
    });
    fixture = TestBed.createComponent(SectionBlogs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
