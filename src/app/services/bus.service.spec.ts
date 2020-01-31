import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BusService } from './bus.service';

describe('BusService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [BusService]
  }));

  it('should be created', () => {
    const service: BusService = TestBed.get(BusService);
    expect(service).toBeTruthy();
  });
});
