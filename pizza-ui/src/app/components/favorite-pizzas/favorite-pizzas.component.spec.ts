import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePizzasComponent } from './favorite-pizzas.component';

describe('FavoritePizzasComponent', () => {
  let component: FavoritePizzasComponent;
  let fixture: ComponentFixture<FavoritePizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
