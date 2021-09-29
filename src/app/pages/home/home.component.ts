import { Usuario } from './../../classes/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaUsuarios: Usuario[] = [
    { id: '1', nombre: 'Alberto', email: 'alberto@test.com', password: '', foto: 'https://joeschmoe.io/api/v1/male/alberto' },
    { id: '2', nombre: 'Fernanda', email: 'fernanda@test.com', password: '', foto: 'https://joeschmoe.io/api/v1/female/fernanda' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public recibirUsuario(usuario: Usuario) {
    console.log(usuario);
    this.listaUsuarios.push(usuario);
  }

}
