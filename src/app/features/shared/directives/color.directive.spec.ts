import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ColorDirective } from './color.directive';

describe('ColorDirective', () => {
  let fixture: ComponentFixture<any>;
  let directive: ColorDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective],
      providers: [
        {
          provide: ElementRef,
          useValue: new ElementRef(document.createElement('div'))
        }
      ]
    });

    fixture = TestBed.createComponent(ColorDirective);
    directive = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
