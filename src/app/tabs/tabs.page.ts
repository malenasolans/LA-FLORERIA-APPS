import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router:Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log("EVENTO",event)
        switch (event.urlAfterRedirects){
          case "/tabs/tab1":
            this.seleccionado = [true,false,false];
            break;
              case "/tabs/tab2":
             this.seleccionado = [false,true,false];
             break;
             case "/tabs/tab3":
             this.seleccionado = [false,false,true];
             break;
           default:
                this.seleccionado = [true,false,false];
                break;
        }
      }
    })
  }

  seleccionado = [false,false,false];
  

}
