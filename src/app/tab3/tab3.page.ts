import { Component, inject } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { RouterLink } from '@angular/router';
import { IonTabs } from '@ionic/angular/common/directives/navigation/tabs';
import { PerfilService } from '../core/services/perfil.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    router: any;
    perfilService = inject (PerfilService);
  
    constructor(public cartService:CartService) {}
  
  
   crearMensaje():string{
      let parteProductos = '';
      let partePerfil = '';
      this.cartService.carrito.forEach(productoCarrito => {
        const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
  `;
        parteProductos = parteProductos + mensajeProducto;
      })
      const primeraParte = "https://wa.me/+543413758100?text=";
      const segundaParte = `Hola, quiero hacer un pedido:
  ${parteProductos}
  
  Datos del cliente:
  ${partePerfil}
    Nombre:  ${this.perfilService.perfil()?.nombre}
    Teléfono: ${this.perfilService.perfil()?.telefono}
    Dirección de envío: ${this.perfilService.perfil()?.direccion} 
    Mensaje personalizado de la compra:  ${this.perfilService.perfil()?.mensajePersonalizado}
    Muchas gracias :)
  `;
  const mensaje = encodeURI(primeraParte+segundaParte);
       return mensaje;
    }
  
    realizarPedido(){
      window.open(this.crearMensaje(), '_blank');
      this.cartService.vaciarCarrito();
    }
    }
  