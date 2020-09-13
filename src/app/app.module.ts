import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { MultiusersComponent } from './multiusers/multiusers.component';
import { OrdersComponent } from './orders/orders.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OffersComponent } from './offers/offers.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ProductratingComponent } from './productrating/productrating.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BulkordersComponent } from './bulkorders/bulkorders.component';
import { AffilateComponent } from './affilate/affilate.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AnalysticsComponent } from './analystics/analystics.component';
import { DilayhistoryComponent } from './dilayhistory/dilayhistory.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { EditusersComponent } from './editusers/editusers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    ProductsComponent,
    MultiusersComponent,
    OrdersComponent,
    ShippingComponent,
    OffersComponent,
    CouponsComponent,
    ProductratingComponent,
    InvoiceComponent,
    BulkordersComponent,
    AffilateComponent,
    BlogsComponent,
    AnalysticsComponent,
    DilayhistoryComponent,
    AdloginComponent,
    EditusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
