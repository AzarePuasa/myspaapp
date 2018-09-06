import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // this will store the current product to display
  product_id: number; 
  product_name: string;

  constructor(private activatedRoute: ActivatedRoute, 
    private productService: ProductService) { }

  ngOnInit() {
    //get the parameter.
    const custId = this.activatedRoute.snapshot.params.id;

    //get the product selected.
    const product = this.productService.getProduct(custId);

    this.product_id = this.productService.getProduct(custId).id;
    this.product_name = this.productService.getProduct(custId).name;
    console.log("Selected id: ", custId);
    console.log("Selected name: ", product);
  }
}
