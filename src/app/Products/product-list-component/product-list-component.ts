import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../Service/product-service.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-list-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private changeDetector: ChangeDetectorRef) { }

  products: Product[];
  products$ = this.productService.data$;

  ngOnInit() {
    this.productService.loadProducts();
    this.productService.data$.subscribe(data=>{
      this.products = data;
      this.changeDetector.markForCheck();
    })
  }
}
