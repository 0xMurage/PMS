import { TestBed } from '@angular/core/testing';

import { PropertyGatewayService } from './property-gateway.service';

describe('PropertyGatewayService', () => {
  let service: PropertyGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
