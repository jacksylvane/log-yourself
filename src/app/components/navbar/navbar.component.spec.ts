import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TestModule } from '../../../test-helpers/test.module';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [TestModule],
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display 01.05.2018, Tuesday - Week 18', () => {
    const date = component.today = 1525193026000;
    fixture.detectChanges();
    expect(de.query(By.css('.date')).nativeElement.innerText).toContain('01.05.2018, Tuesday - Week 18');
  });
  it('should display 02.01.2011, Sunday - Week 52', () => {
    const date = component.today = 1293993474000;
    fixture.detectChanges();
    expect(de.query(By.css('.date')).nativeElement.innerText).toContain('02.01.2011, Sunday - Week 52');
  });
});


