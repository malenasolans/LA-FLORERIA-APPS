import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../core/interfaces/perfil';
import { PerfilService } from '../core/services/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  perfilService = inject(PerfilService);
  router = inject(Router);

  constructor() {}

  ngOnInIt(): void {
    if(this.perfilService.perfil()){
      this.perfil = {...this.perfilService.perfil()}
    }
  }


  perfil: Perfil = {
    nombre: "",
    direccion: "",
    telefono: "",
    mensajePersonalizado: ""
  }

  guardarDatosPerfil(){
   this.perfilService.guardarDatos(this.perfil);
   this.router.navigate(["/tabs/tab3"])
  }



}

