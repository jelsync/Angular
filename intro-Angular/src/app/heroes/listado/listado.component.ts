import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string[] = [];
  
  borrarHeroe(){
    const borrado = this.heroes.shift() || '';
    this.heroeBorrado.push(borrado)
  }

}
