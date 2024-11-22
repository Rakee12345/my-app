import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationblogComponent } from './applicationblog.component';

describe('ApplicationblogComponent', () => {
  let component: ApplicationblogComponent;
  let fixture: ComponentFixture<ApplicationblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
