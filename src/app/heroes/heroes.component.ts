import { Component, OnInit, Pipe } from '@angular/core'; /* (1) OnInit faz parte do ciclo de vida do Component, então logo após o Component ser criado, ele executa tudo que tiver dentro do OnInit(). (2) Pipe é desnecessário. Ele está no import do CommomModule */
import { Hero } from '../hero.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ FormsModule, CommonModule],

  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent implements OnInit  {
  hero: Hero =
   {
    id: 1,
    name: 'wolverine'
   };

  constructor() {} /* O construtor, a gente vai usar ele em vídeos futuros. Com ele a gente pode fazer Injeção de Dependência, iniciar uma variável, se for o caso. */

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
