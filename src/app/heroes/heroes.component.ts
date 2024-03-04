import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [CommonModule, FormsModule, HeroDetailComponent, MatToolbarModule],
})
// Com o 'implements OnInit', o OnInit ele faz parte do ciclo de vida do Component.  // Então, o Component é criado, e depois dele ser criado ele é inicializado. // Então, é nesse OnInit (inicialização), a gente vai obter a nossa lista.  // OnInit é um complemento da INJEÇÃO DE DEPENDÊNCIA de Serviços: Injeto o Serviço no Construtor + implemento o OnInit na declaração.
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // Nossa propriedade 'heroes' agora vai ser do Tipo Heroes[], e ela vai inicar vazia ([]).
  selectedHero?: Hero;

  // Pra eu poder utilizar o nosso Service (HeroService), eu vou ter que adiciconá-lo (injeção de dependência) no Construtor desta Classe.   // private: é que ele vai poder ser enxergado dentro deste arquivo. E ele não vai ser possível ser enxergado dentro de nosso template (heroes.component.html).
  constructor(private heroService: HeroService) {}

  // Implementação do método OnInit (injeção de dependência).
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  // Método pra pegar um Hero (herói) da TELA do template, e SETAR o nosso selectedHero.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
