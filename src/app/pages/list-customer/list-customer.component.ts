import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { ConfigService } from 'src/app/services/config.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customerList$: Observable<Customer[]> = this.customerService.customerList$;
  length$: Observable<number> = this.customerService.dataLength$;

  constructor(
    private customerService: CustomerService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.customerService.getAll()
  }

}
