import { CommonModule, Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms"; // Para usarmos o [(ngModel)]="hero.name" no TEMPLATE, e não dar erro.
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";
import { CoreModule } from "../../../core/core.module";
import { Hero } from "../../../core/models/hero.model";
import { HeroService } from "../../../core/services/hero.service";
import { MaterialModule } from "../../../material/material.module";

@Component({
    selector: "app-hero-detail",
    standalone: true,
    imports: [
        FormsModule,
        CoreModule,
        FlexLayoutModule,
        CommonModule,
        MaterialModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: "./hero-detail.component.html",
    styleUrls: ["./hero-detail.component.scss"],
})
export class HeroDetailComponent implements OnInit {
    hero!: Hero;
    // Se eu não colocar o "!" depois da variável, vou receber uma mensagem de ERRO. É o ANGULAR avisando que eu tenho que começar (inicializar) qualquer variável que a gente vai usar.
    // Opções pra eu colocar: "hero!", "hero: | undefined" ou "hero?". // Estou dizendo que a gente vai receber um valor prá variável, mas que a gente não tem esse valor agora pra podeer colocar aquir.

    constructor(
        private heroService: HeroService,
        private location: Location,
        private route: ActivatedRoute
    ) {}
    // O HeroService eu quero ele prá criar um método prá buscar o nosso Herói.
    // Eu quero o Location o Angular Common. É pra gente poder interagir com o HISTÓRICO DO BROWSER nosso. // O ActivetedRoute, ele segura as informações, sobre o momento que a ROTA estiver.

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get("id")); // Qualquer parâmetro que vai ser colocado na URL, este parâmetro é string. Só que o nosso getHero(), o parâmetro a gente tá esperando um inteiro. Então "Number()", é para fazer a conversão pra gente.
        // snapshot: Estou tirando uma foto do momento.

        //console.log(id);
        //  O console.log, ele permite que a gente mostre no CONSOLE DO BROWSER esta informação (no caso o id).
        //  Daí, eu abro o CONSOLE DO NAVEGADOR (F12 ou DeveloperTools), e clico em CONSOLE. Também funciona no VS (no CONSOLE do TERMINAL)T.

        this.heroService.getHero(id).subscribe((hero) => (this.hero = hero)); // Preciso do "subscribe()" toda vez que eu usar um OBSERVABLE (valor que não está mocado, ie no nosso projeto, já que ele pode vir de uma API etc).  // o método "subscribe()" ele já vem com um DELEGATE (método que eu posso usar como uma FUNCTIO também).  // Uma FUNCTION (método) eu coloco só "(dado entrada) => (retorno))" O que que o OBSERVABLE (subscribe) vai retornar pra nós?    Ele vai retornar um hero, e aí, o this.hero vai RECEBER o hero que vai vir do nosso Service.
    }

    goBack(): void {
        this.location.back();
        // Agora eu estou usando o Location (Classe). // Ele está pegando o MOMENTO que eu estava no caso, e voltando nele.
        //   back() do Location é o método prá ele VOLTAR (<--), lá no nosso BROWSER.
    }

    /*
    Na Aula 19, ele já não vai mais receber o Input. Então foi retirado a linha:
      @Input() hero?: Hero; // Pra que o HeroDetail (este componente) receba um valor de FORA DELE, a gente tem que colocar um decorator chamado @Input, na propriedade dele. Assim, outros componentes podem SETAR (colocar) valores prá ela.
      Assim ela fica como PÚBLICA.


     */

    /*
    - Diretivas em Angular;
    - Binding de dados em Angular;
    - Decoradores ou marcadores (Nomes começando com o @) que eu
      usarei nas Classes (componentes, diretivas minhas ou do Angular)
      nas propriedades, nos métodos;

    Na verdade, são recursos do Angular que vinculam o DOM ao Angular.
    Durante a detecção de alterações, o Angular atualiza automaticamente
    o objetos DOM (xml e html template) vinculado ao componente / propriedade
    / método. E nessa alteração, renderiza-se a página web, sem a necessidade
    de atualizar a página inteira.
*/

    /*
    Como fazer o binding de dados em Angular: guia completo para iniciantes
    Por Gaspar Barancelli Junior em 01 de março de 2023.
    Fonte: https://www.gasparbarancelli.com/post/como-fazer-o-binding-de-dados-em-angular-guia-completo-para-iniciantes#:~:text=O%20binding%20de%20dados%20%C3%A9,web%20mais%20eficiente%20e%20flex%C3%ADvel.

    O binding de dados é uma das principais funcionalidades do Angular.
    Ele permite que as alterações feitas em uma propriedade sejam refletidas
    automaticamente em outras partes do aplicativo, sem a necessidade de
    atualizar a página inteira. Isso torna o desenvolvimento de aplicativos
    da web mais eficiente e flexível.

    Para fazer o binding de dados em Angular, é importante entender a sintaxe
    e os diferentes tipos de binding disponíveis. Além disso, é importante
    escolher o tipo de binding adequado para cada situação, levando em
    consideração a natureza dos dados e a interação do usuário com o aplicativo.

    Existem diferentes tipos de binding de dados disponíveis no Angular, incluindo:



    Interpolação
    É uma técnica para exibir valores em um modelo HTML. Ela é realizada usando
    chaves duplas {{ }} para envolver o valor desejado.

    Por exemplo, se você tiver uma variável no componente chamada "nome", poderá
    exibir seu valor em um parágrafo usando interpolação da seguinte maneira:

    <p>Meu nome é {{nome}}</p>



    Property binding
    O binding de propriedades é usado para associar uma propriedade HTML a uma
    propriedade do componente. Por exemplo, se você quiser definir a cor de fundo
    de um elemento HTML com base em uma propriedade do componente chamada
    "corDeFundo", você pode usar a sintaxe de binding de propriedade da seguinte
    maneira:

    <div [style.backgroundColor]="corDeFundo">
      Conteúdo
    </div>



    Event binding
    O binding de eventos permite que você responda a eventos do usuário, como
    cliques ou digitação de teclas. Por exemplo, se você quiser executar um método
    chamado "salvar" quando um botão for clicado, você pode usar a sintaxe de
    binding de evento da seguinte maneira:

    <button (click)="salvar()">Salvar</button>
    Two-way binding
    O two-way binding permite que as alterações feitas em uma propriedade HTML
    sejam refletidas automaticamente na propriedade do componente e vice-versa.
    Por exemplo, se você quiser criar um campo de entrada de texto que atualize
    automaticamente uma variável do componente chamada "texto", você pode usar a
    sintaxe de two-way binding da seguinte maneira:

    <input [(ngModel)]="texto">
    <p>Texto digitado: {{texto}}</p>
    Observação: O two-way binding requer a importação do módulo FormsModule do
    Angular no componente em questão.

    Conclusão
    O binding de dados é uma funcionalidade essencial do Angular que permite que
    as alterações feitas em uma propriedade sejam refletidas automaticamente em
    outras partes do aplicativo. Compreender a sintaxe e os diferentes tipos de
    binding disponíveis é fundamental para o desenvolvimento eficiente e
    flexível de aplicativos da web em Angular.
*/

    /*
    Diretivas no Angular
    Fonte: https://vidafullstack.com.br/angular/o-que-sao-diretivas-angular/

    Diretiva ngIf com Else
       Ver na fonte.

    Diretiva *NgIf
       import { Component } from '@angular/core';

       @Component({
         selector: 'app-root',
         templateUrl: './app.component.html',
         styleUrls: ['./app.component.css']
       })

       export class AppComponent {
         public estaLogado:boolean = false;
       }

       Com o “ngIf” podemos avaliar se devemos ou não adicionar a o item
       do menu baseado se é “true” ou “false”.

       <ul>
          <li>Item para todos se estiver logado ou não</li>
          <li> Item para todos se estiver logado ou não </li>
          <li *ngIf="estaLogado">Somente se estiver logado</li>
        </ul>


    Diretiva *ngFor
          Aqui temos um loop de elementos com um “for of”, usamos o “ngFor”.

          *ngFor="let tempItem of List", [ngStyle]="{ 'propriedade-css': 'valor' },

          Como exemplo, vamos fazer uma lista de filmes e mostrar na tela.
          1 – Vamos criar nossa lista como os valores que serão os filmes em si,
              mas para fins de estudo e facilitar, vamos criar na mão ela, mas podendo
              ser consumida de outros locais sem problemas.


                import { Component } from '@angular/core';

                @Component({
                  selector: 'app-root',
                  templateUrl: './app.component.html',
                  styleUrls: ['./app.component.css']
                })

                export class AppComponent {

               public filmesFavoritos= [
                 'Superbad',
                 'Duna',
                 'Batman',
                 'Exterminador do Futuro'
               ];
             }

          Podemos também ver o número de elementos de nossa lista com outra variável
          com o nome de index.
             <elemento *ngFor="let tempItem of List; let tempIndex = index">
                // use {{ tempIndex }} and/or {{ tempItem }}
             </elemento>

    Diretiva ngStyle
       Essa é uma diretiva que muda o CSS dos elementos dinamicamente, não adicionar
       elementos no DOM como outras diretivas e sim mudar as já existentes.
           <elemento [ngStyle]="{ 'propriedade-css': 'valor' }"> </elemento>

       Exemplo:
           <p [ngStyle]="{
            'background-color': '#f4f4f4,
            'color': '#red,
            'padding': '.5rem'
           }">Lorem ipsum</p>


    Diretiva ngClass:
       <elemento [ngClass]="{ 'classe-css': condicao}"> </elemento>

       Vamos fazer um exemplo onde mudamos para verde o nome do usuário que está online.

       CSS:
        .online
        {
          color: green
        }

       Agora vamos criar uma variável e para continuar tudo de forma simples, já vamos
       passar como true o valor.
        import { Component } from '@angular/core';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })

        export class AppComponent {
          public estaOnline= true;
        }

       A condição será verificar se o valor é “true” ou “false”.
        <p [ngClass]="{ 'online': estaOnline}">Username</p>

    Como podemos ver é bem simples e dá para fazer “n” coisas adicionando e removendo
    classes dinamicamente.
*/

    /*
     @Input
     Decorador que marca um campo de classe como uma propriedade de entrada
     e fornece metadados de configuração. A propriedade input está vinculada
     a uma propriedade DOM no modelo. Durante a detecção de alterações,
     o Angular atualiza automaticamente a propriedade data com o valor da
     propriedade DOM (elemento xml por exemplo).
*/
}
