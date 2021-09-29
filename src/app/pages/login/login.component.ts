import { Usuario } from './../../classes/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = new Usuario();

  constructor(private router: Router) { }

  ngOnInit(): void { 
  }

  public ingresar() {
    console.log({
      usuario: this.usuario
    });

    this.router.navigate(['home']);
  }

}
