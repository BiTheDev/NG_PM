import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  current;
  prodId;
  error;
  deleteprod=true;
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
      this.current= data;
      if(this.current['qty'] > 0){
        this.deleteprod = false;
      }
    })
  }
  Delete(){
    if(this.current['qty'] > 0){
        this.error = "To delete a product, the Qty must be 0";
    }else{
      let obs = this._httpService.DeleteProduct(this.prodId);
    obs.subscribe(data=>{
      console.log("Delete product success",data);
      this._router.navigate(['/']);
    }
  )
  }
}
}
