import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelvegameComponent } from './twelvegame.component';

describe('TwelvegameComponent', () => {
  let component: TwelvegameComponent;
  let fixture: ComponentFixture<TwelvegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwelvegameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelvegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
