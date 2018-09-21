import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
const routes: Routes = [
  {path:"products", component : ProductsComponent},
  {path:"products/new",component : CreateProductComponent},
  {path:"products/:id",component : ProductdetailComponent},
  {path : "products/:id/edit",component : UpdateProductsComponent},
  { path: '',redirectTo: '/products',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
