import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Goku',
    poder: 30000
  }

  agregar() {
    // agregar( event: any ){
    // event.preventDefault();
    console.log(this.nuevo)
  }
  cambiarNombre(event: any){
    console.log(event.target.value)
  }

}
