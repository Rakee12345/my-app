import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMDBComponent } from './imdb.component';

describe('IMDBComponent', () => {
  let component: IMDBComponent;
  let fixture: ComponentFixture<IMDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
