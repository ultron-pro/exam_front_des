import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategaroiesComponent } from './view-categaroies.component';

describe('ViewCategaroiesComponent', () => {
  let component: ViewCategaroiesComponent;
  let fixture: ComponentFixture<ViewCategaroiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategaroiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategaroiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
