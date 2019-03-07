import { TestBed, inject, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product-service.service';
import { Product } from '../Model/product';
import { catchError } from 'rxjs/operators';

describe('ProductServiceService', () => {

  let injector: TestBed;
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    injector = getTestBed();
    service = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  describe('httpGetProducts', () => {
    it('should return an Observable<Product[]>', () => {

      var dummyProducts: Product[] = new Array()
      dummyProducts.push(new Product(1, "Galaxy S3", "SM-S8ABCD13", "SN00000001"));
      dummyProducts.push(new Product(2, "Galaxy S7", "SM-S8ABCD17", "SN00000002"));

      service.httpGetProducts$.subscribe(products => {
        expect(products.length).toBe(2);
        expect(products).toEqual(dummyProducts);
      });

      const request = httpMock.expectOne(`${service.BaseUri}/products`);
      expect(request.request.method).toBe("GET");
      request.flush(dummyProducts);
    });
  });
});
