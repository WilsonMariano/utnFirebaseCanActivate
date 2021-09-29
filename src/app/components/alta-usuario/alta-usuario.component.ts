import { Usuario } from './../../classes/usuario';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  @Output() submitFormulario = new EventEmitter();

  public usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

  public agregarUsuario() {
    this.submitFormulario.emit(this.usuario);
    this.usuario = new Usuario();
  }

}
