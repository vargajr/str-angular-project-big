import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { combineLatest } from 'rxjs';
import { IInfoCard } from 'src/app/common/info-card/info-card.component';
import { BillService } from 'src/app/services/bill.service';
import { CategoryService } from 'src/app/services/category.service';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: IInfoCard[] = [
    {
      title: 'Bills',
      content: '',
      cardClass: 'card-header-warning',
      footer: 'Ide is jön valami...',
      iconClass: 'material-icons',
      iconText: 'content_copy',
    },
    {
      title: 'Categories',
      content: '',
      cardClass: 'card-header-success',
      footer: 'Last 24 Hours',
      iconClass: 'material-icons',
      iconText: 'store',
    },
    {
      title: 'Customers',
      content: '',
      cardClass: 'card-header-danger',
      footer: 'Tracked from Github',
      iconClass: 'material-icons',
      iconText: 'info_outline',
    },
    {
      title: 'Orders',
      content: '',
      cardClass: 'card-header-info',
      footer: 'Just Updated',
      iconClass: 'fa fa-twitter',
      iconText: '',
    },
    {
      title: 'Products',
      content: '',
      cardClass: 'card-header-info',
      footer: 'Just Updated',
      iconClass: 'fa fa-twitter',
      iconText: '',
    },
  ];

  combinedSubscription: Subscription = new Subscription();

  orderChartLabels: Label[] = ['new', 'shipped', 'paid'];
  ordelChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Orders'},
  ];

  constructor(
    private billService: BillService,
    private categoryService: CategoryService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.combinedSubscription = combineLatest([
      this.billService.list$,
      this.categoryService.list$,
      this.customerService.list$,
      this.orderService.list$,
      this.productService.list$,
    ]).subscribe(
      data => {
        const totalBillNr: number = data[0].length;
        const paidBillNr: number = data[0].filter(b => b.status === 'paid').length;
        const unPaidBillNr: number = data[0].filter(b => b.status === 'new').length;
        const unPaidAmount: number = data[0]
          .filter(b => b.status === 'paid')
          .map(b => b.amount)
          .reduce((acc, curr) => acc + curr);
        
        const categoryNr: number = data[1].length;

        const customerNr: number = data[2].length;
        const activeCustomerNr: number = data[2].filter(c => c.active === true).length;

        const newOrderNr: number = data[3]
          .filter(o => o.status === 'new').length;
        const newOrderAmount: number = data[3]
          .filter(o => o.status === 'new')
          .map(o => o.amount)
          .reduce((acc, curr) => acc + curr);
        const shippedOrderNr: number = data[3]
          .filter(o => o.status === 'shipped').length;
        const shippedOrderAmount: number = data[3]
          .filter(o => o.status === 'shipped')
          .map(o => o.amount)
          .reduce((acc, curr) => acc + curr);
        const paidOrderNr: number = data[3]
          .filter(o => o.status === 'paid').length;
        const paidOrderAmount: number = data[3]
          .filter(o => o.status === 'paid')
          .map(o => o.amount)
          .reduce((acc, curr) => acc + curr);
        const totalOrderNr = newOrderNr + shippedOrderNr + paidOrderNr;

        const productNr: number = data[4].length;
        const featuredProdNr: number = data[4].filter(p => p.featured).length;
        const activeProdNr: number = data[4].filter(p => p.active).length;
      }
    );
  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();
  }

}
