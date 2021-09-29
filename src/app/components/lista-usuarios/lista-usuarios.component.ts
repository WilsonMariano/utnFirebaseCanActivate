import { Usuario } from './../../classes/usuario';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  @Input() listaUsuarios: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
