export class User{
  login:string='';
  password:string='';
  constructor(login:string,password:string) {
    this.login=login;
    this.password=password;
  }
  toString(){
    return `login: ${this.login}
              password: ${this.password}`;
  }
}
