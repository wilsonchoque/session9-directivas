import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  element = false;

  valor !: any;


  mostrar() {
    this.valor = document.getElementById('activo');

    this.element = this.valor.checked;

  }



}
