import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoToDrawComponent } from './who-to-draw.component';

describe('WhoToDrawComponent', () => {
  let component: WhoToDrawComponent;
  let fixture: ComponentFixture<WhoToDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoToDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoToDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
