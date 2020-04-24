import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html'
})
export class AppLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routerlink(): void{
    this.router.navigate(['/dashboard'])
  }



}
