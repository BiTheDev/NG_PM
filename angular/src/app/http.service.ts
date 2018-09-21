import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  idnum = 0;
  constructor(private _http: HttpClient) { }

  GetAllProduct(){
    return this._http.get("/api/getAll");
  }
  GetOneProduct(id){
    return this._http.get("/api/" + id);
  }
  CreateProduct(product){
    return this._http.post("/api/new",product);
  }
  EditProduct(id,update){
    return this._http.put("/api/update/" +id, update);
  }
  DeleteProduct(id){
    return this._http.delete("/api/destroy/" + id)
  }
}
