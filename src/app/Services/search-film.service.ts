import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class SearchFilmService{
  constructor(private http:HttpClient) {
  }
  getFilm(title:string,year:string,type:string){
    let url = "https://www.omdbapi.com/";
    let apikey = "6d0934bb";
    const params = new HttpParams()
      .set('apikey', apikey)
      .set('t', title)
      .set('y', year)
      .set('type', type);
    return this.http.get(url, {params});
  }
}
