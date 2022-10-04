import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFilmsComponent } from './api-films.component';

describe('ApiFilmsComponent', () => {
  let component: ApiFilmsComponent;
  let fixture: ComponentFixture<ApiFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
