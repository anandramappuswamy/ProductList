import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product-service.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  records: Product[];
  products$ = this.productService.data$;

  ngOnInit() {
    this.productService.loadProducts();
  }
}
