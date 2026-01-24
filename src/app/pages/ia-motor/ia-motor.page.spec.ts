import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IaMotorPage } from './ia-motor.page';

describe('IaMotorPage', () => {
  let component: IaMotorPage;
  let fixture: ComponentFixture<IaMotorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IaMotorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
