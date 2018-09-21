import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  updateProduct = {name :"", qty:"", price: ""};
  currentProduct = {name :"", qty:"", price: ""};
  nameerror;
  qtyerror;
  priceerror;
  prodId;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.prodId = params.id;
      console.log(this.prodId);
      this.GetOneProduct();
    });
  }

  GetOneProduct(){
    let obs=this._httpService.GetOneProduct(this.prodId);
    obs.subscribe(data=>{
      console.log("Get current product",data);
      this.currentProduct = {name :data['name'], qty:data['qty'], price: data['price']};
      this.updateProduct = {name :data['name'], qty:data['qty'], price: data['price']};
    })
  }

  Update(){
    let obs = this._httpService.EditProduct(this.prodId,this.updateProduct);
    obs.subscribe(data=>{
      if(data['errors']){
        console.log(data['errors']);
        if(data['errors']['name']){
          this.nameerror = data['errors']['name'];
        }
        if(data['errors']['qty']){
          this.qtyerror = data['errors']['qty'];
        }
        if(data['errors']['price']){
          this.priceerror = data['errors']['price'];
        }
      }else{
      console.log("Data Updated",data);
      this.updateProduct = {name :"", qty:"", price: ""};
      this._router.navigate(['/']);
      }
    })
  }
  reset(){
    this.updateProduct = this.currentProduct;
  }

}
