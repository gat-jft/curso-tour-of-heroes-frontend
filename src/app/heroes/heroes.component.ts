import { Component, OnInit, Pipe } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
