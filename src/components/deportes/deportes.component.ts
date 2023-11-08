import { Component, OnInit, DoCheck } from "@angular/core";

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor() {
        this.sports = ["Canicas", "Padel", "Futbol", "Curling", "Petanca", "Dardos","Tenis" ]
        this.numeros = [ 1,33,56,17,66,3,67,22,44,98];
    }
}