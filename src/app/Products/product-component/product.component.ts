import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
