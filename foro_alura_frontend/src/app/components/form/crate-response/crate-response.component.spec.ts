import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateResponseComponent } from './crate-response.component';

describe('CrateResponseComponent', () => {
  let component: CrateResponseComponent;
  let fixture: ComponentFixture<CrateResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrateResponseComponent]
    });
    fixture = TestBed.createComponent(CrateResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
