import { Component, OnInit } from '@angular/core';
import {HttpPipeService} from "../Services/http-pipe.service";
import {Item} from "../Services/item";

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JSONComponent implements OnInit {
items:Item[]=[];
  constructor(public httpService:HttpPipeService) { }


  ngOnInit(): void {
    this.httpService.getItem().subscribe((data:Item[])=>this.items=data);
  }

}
