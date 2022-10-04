import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Item} from "./item";
import {catchError, map, Observable} from "rxjs";



@Injectable()
export class HttpPipeService{
  errorMes:string='';
  constructor(private http:HttpClient) {

  }
  getItem():Observable<Item[]>{
    return this.http.get('assets/item.json').pipe(map((data:any)=>{
      let itemList=data["itemList"];
      return itemList.map(function (item:any):Item{return new Item(item.productItem, item.priceItem, item.idItem)});
    }),
      catchError(err=>{
        console.log(err);
        this.errorMes = err.message;
        return[];
      }));

  }
}
