import { Component, OnInit } from '@angular/core';
import {User} from "../Services/user";
import {HttpPostService} from "../Services/http-post.service";



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
user:User=new User("","");
answer:string="";
done:boolean=false;
  constructor(private httpPostService:HttpPostService) { }
  submit(user:User){
    this.httpPostService.postData(user).subscribe((data:any)=>{
      this.answer=data.login;this.done=true;console.log(data);
    },
      error=>console.log(error))
  }

  ngOnInit(): void {
  }

}
