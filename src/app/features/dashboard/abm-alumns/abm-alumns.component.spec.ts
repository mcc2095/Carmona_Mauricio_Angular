import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmAlumnsComponent } from './abm-alumns.component';

describe('AbmAlumnsComponent', () => {
  let component: AbmAlumnsComponent;
  let fixture: ComponentFixture<AbmAlumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbmAlumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmAlumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
