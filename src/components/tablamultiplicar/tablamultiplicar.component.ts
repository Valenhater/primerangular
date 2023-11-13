import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiplicar-numeros',
  templateUrl: './tablamultiplicar.component.html',
})
export class TablaMultiplicarComponent {
  //Declaramos variables que hacen referencia al id de angular
  //de los controles html
  @ViewChild('cajanumero') cajaNumeroRef!: ElementRef;

  public numeros: Array<number>;
  public numero!: number;

  //En angular todas las propiedades deben ser instanciadas/iniciadas con un valor
  //Los objetos de referencia deben indicar que son un nuevo objeto y un valor por defecto para dicho objeto

  //objetoRef = new ElementRef(VALUE POR DEFECTO)

  constructor() {
    this.numeros = new Array<number>();
  }

  multiplicarNumeros(): void {
    this.numero = parseInt(this.cajaNumeroRef.nativeElement.value);
    var aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
     let resultado = this.numero * i;
     aux.push(resultado);
    }
    this.numeros = aux;
  }
}
