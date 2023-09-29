import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListComponent } from './forum-list.component';

describe('ForumListComponent', () => {
  let component: ForumListComponent;
  let fixture: ComponentFixture<ForumListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumListComponent]
    });
    fixture = TestBed.createComponent(ForumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
