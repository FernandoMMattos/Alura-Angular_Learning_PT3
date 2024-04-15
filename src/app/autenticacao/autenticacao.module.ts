import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from 'src/app/autenticacao/cadastro/cadastro.component';
import { PerfilComponent } from 'src/app/autenticacao/perfil/perfil.component';
import { LoginComponent } from 'src/app/autenticacao/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';


@NgModule({
  declarations: [CadastroComponent, PerfilComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule
  ],
  exports: [CadastroComponent, PerfilComponent, LoginComponent],
})
export class AutenticacaoModule {}
