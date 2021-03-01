import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ConfigService } from 'src/app/services/config.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  orderList$: Observable<Order[]> = this.orderService.orderList$;
  length$: Observable<number> = this.orderService.dataLength$;


  constructor(
    private orderService: OrderService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.orderService.getAll()
  }

}
