import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/services/config.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.productList$;
  length$: Observable<number> = this.productService.dataLength$;

  constructor(
    private productService: ProductService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.productService.getAll()
  }

}
