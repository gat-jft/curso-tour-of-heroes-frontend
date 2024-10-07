import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { Hero } from "../core/models/hero.model";
import { HeroService } from "../core/services/hero.service";
import { MaterialModule } from "../material/material.module";

@Component({
    selector: "app-dashboard",

    
    
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        MaterialModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent implements OnInit {
    // Propriedade "hero", do Tipo Hero (uma Interface que é um ARRAY, e este ARRAY ele vai começar VADIO).
    heroes: Hero[] = [];

    // Nosso Service (HeroService), é injetado no DashboardComponent.
    constructor(private heroService: HeroService) {}

    // No meu OnInit(), eu vou chamar o método abaixo "getHeroes()"
    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        // O getHeroes() do nosso Service é um OBSERVABLE, e para que ele possa ser executado, eu vou fazer um subscribe(). E este subscribe() vai retornaar pra mim uma LISTA<de Heroes): a varíavel que eu coloquei no () chamada (heroes).
        // "=>" é a função que eu quero que seja executada.  // slice = fatiar. // Fatiar um ARRRAY. // Fatiar da posição 1 até 5 // Mas, o slice() não pega o último elemento, que no caso seria o 5º. Ele vai pegar os elementos da posição 1 a 4.
        // Então ele não mostra a posição 0 e a 5 do ARRAY.
        this.heroService
            .getHeroes()
            .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    }
}
