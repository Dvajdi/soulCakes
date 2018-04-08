import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBottomComponent } from './feature-bottom.component';

describe('FeatureBottomComponent', () => {
  let component: FeatureBottomComponent;
  let fixture: ComponentFixture<FeatureBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
