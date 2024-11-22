import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentIdComponent } from './create-student-id.component';

describe('CreateStudentIdComponent', () => {
  let component: CreateStudentIdComponent;
  let fixture: ComponentFixture<CreateStudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
