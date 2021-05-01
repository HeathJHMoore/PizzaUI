import { TestBed } from '@angular/core/testing';

import { PizzaElementService } from './pizza-element.service';

describe('PizzaElementService', () => {
  let service: PizzaElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
