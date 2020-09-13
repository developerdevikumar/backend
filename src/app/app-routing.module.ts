import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component'
import { MultiusersComponent } from './multiusers/multiusers.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { EditusersComponent } from './editusers/editusers.component';


const routes: Routes = [
  {path :'adlogin', component: AdloginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'multipleusers', component: MultiusersComponent},
  { path: 'editusers', component: EditusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
