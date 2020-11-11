import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Login} from '../../Models/login';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html'
})
export class AppLoginComponent implements OnInit {
  usuario: Login;
  constructor(private router: Router, private login: LoginService ) {
    this.usuario=new Login();
  }

  ngOnInit(): void {
  }

  routerlink(): void{
    this.router.navigate(['/dashboard'])
  }

  login2() :void{
    console.log(this.usuario);
    if(this.usuario.Usuario ==null || this.usuario.Contrasenia ==null){
      console.log("error verificar hhh");
      return;
    }
    this.login.login(this.usuario).subscribe(response =>{
      console.log(response);

    })
  }

}
