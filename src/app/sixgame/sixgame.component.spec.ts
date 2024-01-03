import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixgameComponent } from './sixgame.component';

describe('SixgameComponent', () => {
  let component: SixgameComponent;
  let fixture: ComponentFixture<SixgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixgameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
