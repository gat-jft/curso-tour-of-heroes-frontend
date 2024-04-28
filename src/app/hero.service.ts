import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero.model";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

// Este Service (Classe) será INJETÁVEL. Fará parte do SID.
@Injectable({
    providedIn: "root",
})
export class HeroService {
    // Este Service, foi injetado dentro de um HeroesComponent.
    // Só que um Service, além dele ser injetado por exemplo num Component, ele também pode ser inserido em outro Service.
    // Por isso que tenho esse CONSTRUTOR.
    //
    // Então, no caso, o MessageService está sendo injetado aqui dentro desse Service.
    //
    //"private":
    //    Então, quem de fora deste HeroService, que tiver acesso à este HeroService, vai poder acessar o MessageService (variável messageService).
    //    Só o HeroService pode acessar aqui dentro do HeroService.
    constructor(private messageService: MessageService) {}

    // Agora o método getHeroes() RETORNA (:) uma lista ASSÍNCRONA (não se sabe de onde, pode ser de um back-end. Dados síncronos, quer dizer que eles estão no nosso código, à disposição imediata) de Hero (ie, um Observable<Hero[]>).   // Observable<T> é para dizer que o dado (T), à partir de agora é um dado assíncrono (dado vindo de um BACK-END, não um dado mocado no nosso projeto, em que tenho um DELAY para recebê-lo).
    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES); // of(T) é uma FUNÇÃO (uma implementação do Antular).

        // Uma vez que eu injetei o MessageService aqui dentro do HeroServive,
        // quando a gente OBTER a nossa Lista<de Heroes>, eu vou adicionar uma mensagem.
        // A mensagem é:
        // "HeroService: fetched heroes"
        //      // HeroService: de onde essa mensagem foi obtida.
        //      // fetched heroes = obtida de heroes
        //
        // Com isso, eu estou adicionando (add), dentro do meu messageService, essa mensagem
        this.messageService.add("HeroService: fetched heroes");

        return heroes;
    }

    getHero(id: number): Observable<Hero> {
        const hero = HEROES.find((hero) => hero.id === id)!; // O JavaScript tem o método find(): Dentro dele eu tenho que colocar um método (predicate), e este método vai percorrer cada item da LISTA, e aí, quando uma condição VERDADEIRA for encontrada, ele retorna pra nós. Aí eu vou colocar uma ARROW FUNCTION **  // Condição: Se o hero.id, do hero, FOR IGUAL ao id passado neste getHero().    // A "!", é que pode ser que é passado um id que não existe
        this.messageService.add(`HeroService: fetched hero id=${id}`); // Coloquei as CRASES, porque a gente vai adicionar um template (modelo) literal ("No HeroService: encontrado(fetched) o id ...") do JavaScript.  // Então, se encontrou ou não o hero, vamos ADICIONAR (add) uma mensagem.

        return of(hero); // retorno o hero que a gente encontrou. // "of" é porque é de um OBSERVABLE.
    }
}

// ARROW FUNCTION:
//   Em termos simples, uma arrow function é uma forma concisa de escrever uma função em JavaScript. Ela otimiza a escrita do seu código, deixando-o mais limpo, enxuto e aumentando a legibilidade.
//   arrow (inglês) é flecha. // É uma flecha (seta) "=>" da função. // Usamos para o retorno da função. // A função é escrita da seguinte forma, por exemplo: (x, y ...) => x . b
//   https://www.hashtagtreinamentos.com/arrow-function-em-javascript?gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZu-dlDGedMn8_2l0rDfhP7PhHNYWlgnDSbu2VPcWun2-D60DjXwHixoCWFcQAvD_BwE

// "subscribe" aqui, "Observable<T>" na classe de Service.  // É como o "async" e "await" no BACK-END. "async" no método do Controller, "await" antes da chamada do Método no Repository ou Service.
//
// Conceito de OBSERVABLE.
//
// Quando eu pedir uma lista de Heróis, esta lista de heróis será um OBSERVABLE (observável).
//
// E aí, o nosso Componente, ele vai subscrever (subscrive) pra este OBSERVABLE (de lista de heróis).
//
// Então, quando a gente fizer uma chamada e tiver um retorno do BACK-END, o nosso Componente que está inscrito pra receber uma NOTIFICAÇÃO, ele vai tomar uma atitute correta pra poder POPULAR os dados.
//
// Este é um conceito crucial quando a gente tá desenvolvendo FRONT-END.
//
// Inclusive, no nosso PACKAGE.JSON, a gente tem um pacote chamado RXJS.
// O RXJS é o responsável por fazer com que o OBSERVABLE funcione no nosso projeto.
//
// Para que serve o RxJS?
// No contexto do Angular, o RxJS é uma parte integral da plataforma e é usado para gerenciar fluxos de dados
// assíncronos, como respostas de API, eventos do usuário e atualizações em tempo real.
