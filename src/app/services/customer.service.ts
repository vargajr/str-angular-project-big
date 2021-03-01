import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {

  customerList$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) {
    super(http, config, 'customers');
    this.list$
      .pipe(
        //
      )
      .subscribe(list => this.customerList$.next(list))
  }

}