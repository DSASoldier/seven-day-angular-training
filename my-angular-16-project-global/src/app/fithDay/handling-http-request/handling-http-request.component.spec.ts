import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingHttpRequestComponent } from './handling-http-request.component';

describe('HandlingHttpRequestComponent', () => {
  let component: HandlingHttpRequestComponent;
  let fixture: ComponentFixture<HandlingHttpRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandlingHttpRequestComponent]
    });
    fixture = TestBed.createComponent(HandlingHttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
