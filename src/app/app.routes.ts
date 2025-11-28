import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageBrandsComponent } from './admin/manage-brands/manage-brands.component';
import { ManageSizesComponent } from './admin/manage-sizes/manage-sizes.component';
import { ManageColorsComponent } from './admin/manage-colors/manage-colors.component';
import { ManageGendersComponent } from './admin/manage-genders/manage-genders.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { CartComponent } from './pages/cart-component/cart-component.component';
import { CheckoutComponent } from './pages/checkout-component/checkout-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailComponent },

  // ADMIN AREA
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/categories', component: ManageCategoriesComponent },
  { path: 'admin/brands', component: ManageBrandsComponent },
  { path: 'admin/sizes', component: ManageSizesComponent },
  { path: 'admin/colors', component: ManageColorsComponent },
  { path: 'admin/genders', component: ManageGendersComponent },
  { path: 'admin/reports', component: ReportsComponent },

  { path: '**', redirectTo: 'products' } 
];