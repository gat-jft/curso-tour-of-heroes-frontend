import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router"; // Para eu usar o "routerLink"" no TEMPLATE (arquivo HTML), pra quando eu clicar/selecionar uma rota, ele desviar para a ROTA do arquivo "appp.routes.ts".
import { AppRoutingModule } from "../../../app-routing.module";
import { Hero } from "../../../core/models/hero.model";
import { HeroService } from "../../../core/services/hero.service";
import { MaterialModule } from "../../../material/material.module";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

//     Não tem MODULE no Angular 17.     Veja as novidades em https://www.alura.com.br/artigos/novidades-angular-17?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=g&hsa_tgt=aud-1295637864136:dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1uZL0TXB7LQXsLW004-hAfy1ZdgyADbCEUK6E_a9Vo4h2QawkdLjG4aAmFMEALw_wctB
import { CoreModule } from "../../../core/core.module";

@Component({
    selector: "app-heroes",
    standalone: true,
    templateUrl: "./heroes.component.html",
    styleUrl: "./heroes.component.scss",
    imports: [
        CoreModule,
        CommonModule,
        FormsModule,
        HeroesComponent,
        HeroDetailComponent,
        RouterModule,
        FlexLayoutModule,
        MaterialModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})
// Com o 'implements OnInit', o OnInit ele faz parte do ciclo de vida do
// Component.  // Então, o Component é criado, e depois dele ser criado
// ele é inicializado. // Então, é nesse OnInit (inicialização), a gente
// vai obter a nossa lista.
//
// OnInit é um complemento da INJEÇÃO DE DEPENDÊNCIA de Serviços:
// Como?
//   Injeto o Service (Serviço) no Construtor E coloco "implements OnIt"
//   na declaração da Classe que for usar este Service E
//   implemento o OnInit na Classe.
export class HeroesComponent implements OnInit {
    displayedColumns: string[] = ["id", "name"];
    // Propriedade displayedColumns. É uma lista de strings (string[], e ela já vai receber os valores 'id' e 'name)

    heroes: Hero[] = []; // Nossa propriedade 'heroes' agora vai ser do Tipo Heroes[], e ela vai inicar vazia ([]).

    // Código TESTE na aula 25.
    //constructor(public heroService: HeroService) {}

    //Todo Component que tem métodos, eles devem ficar isolados num Service (classe externa só para métodos).
    // Daí, eu chamo eles por meio da ID (Injeção de Dependência), que nada mais é que colocar o Service no
    // MÉTODO construtor(){} de um Component ou Service também.
    //
    // Pra eu poder utilizar o nosso Service (HeroService), eu vou ter que adiciconá-lo (injeção de dependência) no Construtor desta Classe.
    // private: é que ele vai poder ser enxergado dentro deste arquivo. E ele não vai ser possível ser enxergado dentro de nosso template (heroes.component.html).
    constructor(private heroService: HeroService) {}

    // Implementação do método OnInit (injeção de dependência).
    ngOnInit(): void {
        this.getHeroes();
    }

    // "subscribe" é para a gente se INSCREVER num Observable.
    // É sempre bom usar o "subscribe", porque assim o dado pode vir de qq luga
    //
    // "subscribe" aqui, "Observable<T>" na classe de Service (HeroService).  // É como o "async" e "await" no BACK-END. "async" no método do Controller, "await" antes da chamada do Método no Repository ou Service.
    // O sinal "=>" é pra ele retornar pra nós, de acordo com o que a gente quer.
    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes) => (this.heroes = heroes));
    }

    //NÃO EXISTE MAIS ESSE MÉTODO OnSelect(), na aula 19.
    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    //     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    // }
}

// Na nossa aplicação, por enquanto, os dados estão mocados.
// O que é isso (dados mocados)?
//
// Sim, os dados mocados são dados fictícios ou simulados que são utilizados durante
// o desenvolvimento de uma aplicação quando a API real ainda não está pronta.
// É uma prática comum para testar o front-end antes de integrá-lo com o back-end.

/* 
  Propriedade "selectedHero?: Hero;"   // Não faz mais sentido na aula 19.

  Injeção do MessageService ("private messageService: MessageService") // não faz mais sentido na Aula 19. Foi retirado do construtor.

  

  Método onSelect() // não faz mais sentido na Aula 19.

// Método pra pegar um Hero (herói) da TELA do template, e SETAR o nosso selectedHero.
 onSelect(hero: Hero): void {
    this.selectedHero = hero;

    //Quando eu clicar no onSelect, ie selecionar um Hero Novo, a gente vai adicionar uma mensnsagem.
    // Pra que isso ocorra, eu vou ter que adicionar (injetar) o Service (MessageService), no nosso CONTRUTOR.
    //
    // Concatenei a mensagem "HeroesComponent: Selected hero id=" + o Id do Hero.
    // Então, quando eu clicar num heroi, além dele atribuir o valor ao selectedHero, e vai adicionar uma mensagem.
    //this.messageService.add("HeroesComponent: Selected hero id=" + hero.id);

    // A linha acima é melhor usar a interpolação de STRINGs.
    // Para o caso de eu ter + de 1 string. E TUDO VIRA 1 STRING SÓ.
    //    Mas para usar interpolação, no método add(), eu não posso colocar a string entre "", senão dá ERRO.
    //    INTERPOLAÇÃO eu coloco a string entre os sinais de CRASE.
    //      Aí eu vou ter um template string. É uma forma bem mais fácil de eu
    //      adicionar uma string, mesclando com alguma propriedade (variável).
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}
*/
