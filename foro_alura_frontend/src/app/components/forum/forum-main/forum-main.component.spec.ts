import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMainComponent } from './forum-main.component';

describe('ForumMainComponent', () => {
  let component: ForumMainComponent;
  let fixture: ComponentFixture<ForumMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumMainComponent]
    });
    fixture = TestBed.createComponent(ForumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
