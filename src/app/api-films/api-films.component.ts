import {Component, ElementRef, OnInit} from '@angular/core';
import {SearchFilmService} from "../Services/search-film.service";



@Component({
  selector: 'app-api-films',
  templateUrl: './api-films.component.html',
  styleUrls: ['./api-films.component.css']
})
export class ApiFilmsComponent implements OnInit {

  constructor(private httpService:SearchFilmService,private elemRef:ElementRef) { }

  ngOnInit(): void {
  }
  search(name:string,year:string,select:string){
    if(name!=""){
      this.httpService.getFilm(name,year,select).subscribe((data:any)=>{
        let resp = data;
        let newFilm=document.createElement("div");
        newFilm.className = "film";
        let img = document.createElement("img");
        img.src = resp["Poster"];
        let info = document.createElement("div");
        info.style.display = "inline-block";
        let title = document.createElement("h1");
        title.innerHTML = resp["Title"];
        title.style.marginTop = '10px';
        title.className = "title";
        let year = document.createElement("h4");
        year.innerHTML = resp["Year"];
        year.className = "year";

        let country = document.createElement("h3");
        country.innerHTML = `<span style="font-weight: 800">Country:</span>`+ resp["Country"];
        country.className = "country";

        let genre = document.createElement("h3");
        genre.innerHTML = `<span style="font-weight: 800">genre:</span>`+ resp["Genre"];
        genre.className = "genre";

        let director = document.createElement("h3");
        director.innerHTML = `<span style="font-weight: 800">director:</span>`+ resp["Director"];
        director.className = "director";

        let runTime = document.createElement("h3");
        runTime.innerHTML = `<span style="font-weight: 800">runTime:</span>`+ resp["Runtime"];
        runTime.className = "runTime";


        info.append(title);
        info.append(year);
        info.append(country);
        info.append(genre);
        info.append(director);
        info.append(runTime);

        newFilm.append(img);
        newFilm.append(info);
        let body = document.body
        body.append(newFilm);




      })
    }
  }

}
