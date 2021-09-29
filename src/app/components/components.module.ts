import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaUsuarioComponent,
    ListaUsuariosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AltaUsuarioComponent,
    ListaUsuariosComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
