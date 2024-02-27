import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero; // Pra que o HeroDetail (este componente) receba um valor de FORA DELE, a gente tem que colocar um decorator chamado @Input, na propriedade dele. Assim, outros componentes podem SETAR valores prá ela. Assim ela fica como PÚBLICA.
}

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
