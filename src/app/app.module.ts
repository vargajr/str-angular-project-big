import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { RightDropdownComponent } from './common/right-dropdown/right-dropdown.component';
import { InfoCardComponent } from './common/info-card/info-card.component';
import { EditBillComponent } from './pages/edit-bill/edit-bill.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ListBillComponent } from './pages/list-bill/list-bill.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { ListCustomerComponent } from './pages/list-customer/list-customer.component';
import { ListOrderComponent } from './pages/list-order/list-order.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    RightDropdownComponent,
    InfoCardComponent,
    EditBillComponent,
    EditCustomerComponent,
    EditCategoryComponent,
    EditOrderComponent,
    EditProductComponent,
    ListBillComponent,
    ListCategoryComponent,
    ListCustomerComponent,
    ListOrderComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
