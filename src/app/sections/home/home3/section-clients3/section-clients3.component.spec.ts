import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClients3Component } from './section-clients3.component';

describe('SectionClients3Component', () => {
  let component: SectionClients3Component;
  let fixture: ComponentFixture<SectionClients3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionClients3Component]
    });
    fixture = TestBed.createComponent(SectionClients3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
