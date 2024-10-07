import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { Hero } from "../models/hero.model";
import { LoadingService } from "./loading.service";
import { MessageService } from "./message.service";

// Este Service (Classe) será INJETÁVEL. Fará parte do SID.
@Injectable({
    providedIn: "root",
})
export class HeroService {
    private heroesUrl = `${environment.baseUrl}/heroes`;
    // ANTES, quando eu só tinha a aplicação rodando em DESENVOLVIMENTO, a esta variável para URL apontava para "/api/heroes".
    // Agora, como também temos a aplicação apontando para um URL que tem um backend em produção.
    //
    // Poderia ser também os sites abaixo, para achar o backend gravaodo em
    //private heroesUrl = "https://toh-api.vercel.app/api";
    //private heroesUrl = "https://toh-json-server-api.herokuapp.com/api";

    // Este Service, foi injetado dentro de um HeroesComponent.
    // Só que um Service, além dele ser injetado por exemplo num Component, ele também pode ser inserido em outro Service.
    // Por isso que tenho esse CONSTRUTOR.
    //
    // Então, no caso, o MessageService está sendo injetado aqui dentro desse Service.
    //
    //"private":
    //    Então, quem de fora deste HeroService, que tiver acesso à este HeroService, vai poder acessar o MessageService (variável messageService).
    //    Só o HeroService pode acessar aqui dentro do HeroService.

    // Código TESTE. na aula 25
    //loading = false; // variável para eu fazer um LOADING (Carregamento... // que seria o tempo de carregamento) da página, conforme aula 25 (Loading... // tempo de carregamento). Mas poderia definir esse tempo na próprio   // OBS.: Até na aula 24, o LOADING (tempo) era definido no arquivo "package.json". // Mas da aula 25, definiremos usando um Component do MATERIAL, como o "Progress Bar" (Barra que fica passando a informação do tempo), ou o "Progress spinner" (barra GIRADORA).  // Então, esse é o objetivo da aula 25, que é criar um Loading GLOBAL. Com a ajuda do MATERIAL. // Assim, independente de qual REQUISIÇÃO (get, put, delete ...) que a gente for fazer, vamos querer um LOADING....

    constructor(
        private http: HttpClient,
        private messageService: MessageService, //private loadingService: LoadingService
        private loadingService: LoadingService
    ) {}

    // GET /heroes
    getHeroes(): Observable<Hero[]> {
        this.loadingService.show(); // Mostrar o LOADING... (barra giratória) // ESTE COMANDO E O COMANDO DE OCULTAR A BARRA GIRATÓRIA ABAIXO, TINHA SIDO USADO COM O CONCEITO DE INTERCEPTOR: COMANDO ng g i src/interceptors/loading --skip-tests. SÓ QUE NÃO TAVA FUNCIONANDO NO ANGULA v17.   ENTÃO, COLOQUEI ESTES COMANDOS QUE IRIAM PARA O INTERCEPTOR AQUI: show() e hide(). // No getHeroes() funcionou o loadingService.show() e o loadingService.hide() também. Já no getHero() não funcionou o LOADING.... Porque será? Então tirei o também o loadingService.hide() do finalize() do getHero().   // PARA CRIAR O INTERCEPTOR, PRECISEI: LoadingComponent, LoadingService, LoadingInterceptor.
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap((heroes) => this.log(`fetched ${heroes.length} hero(es)"`)),
            finalize(() => this.loadingService.hide())
        );
    }

    // GET /heroes/id
    getHero(id: number): Observable<Hero> {
        return this.http
            .get<Hero>(`${this.heroesUrl}/${id}`)
            .pipe(
                tap((hero) =>
                    this.log(`fetched hero id=${id} and name=${hero.name}`)
                )
            );
    }

    // Método pra colocar num local só as nossas mensagens. Eu não preciso passar o HeroService toda vez.
    private log(message: string): void {
        return this.messageService.add(`HeroService: ${message}`);
    }
}

// Injeção de dependência com o StandAlone - outra (nova) opção: COM A FUNÇÃO inject().
//private http = inject(HttpClient);
//private messageService = inject(MessageService);

// GET /heroes/id
// Agora o método getHeroes() RETORNA (:) uma lista ASSÍNCRONA (não se sabe de onde, pode ser de um back-end. Dados síncronos, quer dizer que eles estão no nosso código, à disposição imediata) de Hero (ie, um Observable<Hero[]>).   // Observable<T> é para dizer que o dado (T), à partir de agora é um dado assíncrono (dado vindo de um BACK-END, não um dado mocado no nosso projeto, em que tenho um sssssssssssssssssssssssssssssssssssssssssss para recebê-lo).
// getHeroes(): Observable<Hero[]> {
//     // Código TESTE. na aula 25
//     //this.loadingService.show();
//     return this.http
//         .get<Hero[]>(this.heroesUrl, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ`,
//             },
//         })
//         .pipe(
//             tap((heroes) => this.log(`fetched ${heroes.length} hero(es)"`))
//         );
//     //,
//     //finalize(() => this.loadingService.hide())
//     //);
//     //finalize(() => this.loadingService.hide()) //    // Código TESTE. na aula 25
//     // `fetched ${heroes.length} heroes"` // `Buscou x heroes` OU `Obteve x heroes` // Uso as CRASES, quando vou criar um TEMPLATE (uma mensagem, em que eu posso incluir texto e variáveis NELE. No caso, é o tamanho do da variável tipo ARRAY chamada "heroes").
//     //
//     // O que que o "finalize()" faz? // Independente se for com SUCESSO ou ERRO, o método (getHeroes(), *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading *ngIf="heroService.loading), vai cair no finalize().
// }
// O parâmetro abaixo
//       {
//           headers: {
//             "Content-Type": "application/json",
//           Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ`,
//           },
//       })
// foi adicionado depois que deu o seguinte ERRO, pedindo um cabeçalho de autorização (então tive que passar o cabeçalho, que tem 1 propriedade ref ao TOKEN):
// "error": "Provide an Authorization header to identify yourself (anyone with at least 10 characters).". // Forneça um cabeçalho de autorização para se identificar (qualquer pessoa com pelo menos 10 caracteres).
//       Esse ERRO doi depois que eu que o dado (Heroes[]), viria de um backend lá no VERCEL, no minuto 50:00 do vídeo, e não mais mocado (inclusive até apaguei o arquivo "mock-heroes.ts"):
//       Quem me orientou sobre corrigir esse erro:
//          https://stackoverflow.com/questions/70157121/getting-no-authorization-header-value-error
//
//
//.pipe(tap((heroes) => console.log(heroes))); // Dentro do <> a gente informa o TIPO DE DADO DO RETORNO. Dentro dos () a gente coloca a nossa URL. // console.log(), mostra a informação dos () na tela.
//
//"of()", do RXJS é uma função de CRIAÇÃO.
// "pipe()", também do RXJS é uma função de PIPE (pipeable), ou seja, uma função que espera o resultado de outra que fica dentro dela (dos parêntesis dela).
//
// "pipe()", na documentação é chamada de função de OPERADORES. Ou seja, ela tem um OPERADOR (tap().) , uma outra função interna nos ().
//                           Então, eu adiciono um PIPE, com um OPERADOR (função tap().).
//       "tap()" (tocar) é usado pra gente fazer alguma operação que seja necessário.
//        - PODE SER UMA OPERAÇÃO "console("")" // mostrar na tela.
//        - PODE SER UMA OPERAÇÃO "log()" // a que nós criamos chamada "log()".
//
//"of(), do pacote RXJS", NÃO SERÁ MAIS USADO à partir da aula 24 em diante, porque nossos dados não estão mais MOCADOS, e sim de uma API REST.
//
// USAREMOS O "get()", do HttpClient, através da variável http.
// ENTÃO, TODOS OS COMANDOS ABAIXO FORAM SUBSTITUÍDOS PELOS ACIMA, COM H HttpClient.
//const heroes = of(HEROES); // of(T) é uma FUNÇÃO (uma implementação do Antular).
//
// Uma vez que eu injetei o MessageService aqui dentro do HeroServive,
// quando a gente OBTER a nossa Lista<de Heroes>, eu vou adicionar uma mensagem.
// A mensagem é:
// "HeroService: fetched heroes"
//      // HeroService: de onde essa mensagem foi obtida.
//      // fetched heroes = obtida de heroes
//
// Com isso, eu estou adicionando (add), dentro do meu messageService, essa mensagem
//   this.messageService.add("HeroService: fetched heroes");
//   this.log("fetched heroes");
//   return heroes;

// // GET /heroes/id
// getHero(id: number): Observable<Hero> {
//     return this.http
//         .get<Hero>(`${this.heroesUrl}/${id}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer br0vVMp1XFd0YhCu22AtTtqkS2Xb9rS7ezqBOM6kI7p72hzTiYDPp5qkhkMED5wG`,
//             },
//         })
//         .pipe(
//             tap((hero) =>
//                 this.log(`fetched hero id=${id} and name=${hero.name}`)
//             )
//         );
// }
//),
//finalize(() => this.loadingService.hide())
//);
// Porque usei dessa forma?
// Porque quando a gente tá trabalhando com REST, quando a gente faz um
// /heroes -> a gente tá fazendo um GET pro /heroes.
// /heroes/id -> também a gente tá fazendo um GET pro /heroes.
// POST /heroes -> POST (pra criar um um registro novo) pro /heroes.
// PUT /heroes -> PUT (alteração) pro /heroes.
// DELETE /heroes/id -> DELETE indo pro heroes/id.

//SEQUÊNCIA COMENTADA (PRETERIDA) NA AULA 24.
// const hero = HEROES.find((hero) => hero.id === id)!; // O JavaScript tem o método find(): Dentro dele eu tenho que colocar um método (predicate), e este método vai percorrer cada item da LISTA, e aí, quando uma condição VERDADEIRA for encontrada, ele retorna pra nós. Aí eu vou colocar uma ARROW FUNCTION **  // Condição: Se o hero.id, do hero, FOR IGUAL ao id passado neste getHero().    // A "!", é que pode ser que é passado um id que não existe
// //this.messageService.add(`HeroService: fetched hero id=${id}`); // Coloquei as CRASES, porque a gente vai adicionar um template (modelo) literal ("No HeroService: encontrado(fetched) o id ...") do JavaScript.  // Então, se encontrou ou não o hero, vamos ADICIONAR (add) uma mensagem.

// this.log("fetched hero id=${id}");
// return of(hero); // retorno o hero que a gente encontrou. // "of" é porque é de um OBSERVABLE.

//     // Método pra colocar num local só as nossas mensagens. Eu não preciso passar o HeroService toda vez.
//     private log(message: string): void {
//         return this.messageService.add(`HeroService: ${message}`);
//     }
// }

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
// E aí, o nosso Componente, ele vai subscrever / ACEDER (subscribe) pra este OBSERVABLE (de lista de heróis).
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
