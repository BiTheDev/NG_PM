import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProduct = {name : "", qty:"", price:""};
  nameerror;
  qtyerror;
  priceerror;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  CreateProduct(){
      this._httpService.idnum ++;
      this.newProduct['id'] = this._httpService.idnum;
      let obs= this._httpService.CreateProduct(this.newProduct);
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
          console.log("Create Product success", data);
            this._router.navigate(['/']);
        }
      })
  }
}
