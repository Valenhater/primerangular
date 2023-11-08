import {Component} from '@angular/core';

@Component({
    //debemos indicar el nombre del component 
    //mediante selector, se utilazan guiones para
    //separar cada palabra del component
    selector: "primer-component",
    //Como no queremos un fichero html template
    //se  utiliza la palabra template para indicar el dibujo aqui

    templateUrl: "./primer.component.html",

    styleUrls: ["./primer.component.css"]


})

//Todo component debe ser declarado como clase
//dicho nombre sera utilizado posteriormente en app.module.ts

export class PrimerComponent {
    //Las propiedades de un component se pueden utilizar en su dibujo
    //y dicgas propiedades sonn tipadas
    public titulo: string;
    public descripcion: string;
    public anyo: number;

    //El construcyot de una clase es el primer metodo 
    //por el que entra cualquier component aqui podemos inicializar los valores de las propiedades

    constructor(){
        //Para acceder a las propiedades de una clase se utiliza la palabra this
        this.titulo = "Miercoles de Puente cuajaete";
        this.descripcion = "Aprendiendo angular un miercoles"
        this.anyo = 2023;
    }
}