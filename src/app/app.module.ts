import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JSONComponent } from './json/json.component';
import { ApiFilmsComponent } from './api-films/api-films.component';
import { PasswordComponent } from './password/password.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpPipeService} from "./Services/http-pipe.service";
import {RouterModule, Routes} from "@angular/router";
import {HttpPostService} from "./Services/http-post.service";
import {SearchFilmService} from "./Services/search-film.service";



const appRoutes:Routes=[
  {path:'JSON',component:JSONComponent},
  {path:'password',component:PasswordComponent},
  {path:'API',component:ApiFilmsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    JSONComponent,
    ApiFilmsComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpPipeService,HttpPostService,SearchFilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
