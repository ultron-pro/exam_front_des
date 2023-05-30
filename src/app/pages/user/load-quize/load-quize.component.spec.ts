import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuizeComponent } from './load-quize.component';

describe('LoadQuizeComponent', () => {
  let component: LoadQuizeComponent;
  let fixture: ComponentFixture<LoadQuizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadQuizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadQuizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
