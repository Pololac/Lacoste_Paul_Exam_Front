import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOutilsComponent } from './card-outils.component';

describe('CardOutilsComponent', () => {
  let component: CardOutilsComponent;
  let fixture: ComponentFixture<CardOutilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOutilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
