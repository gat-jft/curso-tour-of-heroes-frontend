import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { CommonModule } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [CommonModule, FormsModule, HeroDetailComponent],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  // Método pra pegar um Hero (herói) da TELA do template, e SETAR o nosso selectedHero.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
