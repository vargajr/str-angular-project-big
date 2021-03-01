import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/services/bill.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent implements OnInit {

  billList$: Observable<Bill[]> = this.billService.billList$;
  length$: Observable<number> = this.billService.dataLength$;
  
  notPaidBills$: Observable<number> = this.billService.notPaidNr$;

  constructor(
    private billService: BillService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.billService.getAll()
  }

}
