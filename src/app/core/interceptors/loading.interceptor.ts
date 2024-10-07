// import {
//     HttpEvent,
//     HttpHandler,
//     HttpInterceptor,
//     HttpRequest,
// } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { finalize, Observable } from "rxjs";
// import { LoadingService } from "../services/loading.service";

// @Injectable()
// //@Injectable() // @Injectable é uma FUNÇÃO. Portanto, tenho que escrever como (), senão dá ERRO DE COMPILAÇÃO.
// export class LoadingInterceptor implements HttpInterceptor {
//     // O LoadingInterceptor ele faz a implementação de HttpInterceptor.
//     // O que significa essa implementação? - Ela exige que a gente tenha o método chamado intercep().
//     private activeRequests = 0; // VARIÁVEL tipo number.

//     // injetamos o serviço LoadingService.
//     constructor(private loadingService: LoadingService) {}
//     intercept(
//         req: HttpRequest<unknown>,
//         next: HttpHandler
//     ): Observable<HttpEvent<unknown>> {
//         if (this.activeRequests === 0) {
//             this.loadingService.show();
//         }

//         this.activeRequests++;

//         return next.handle(req).pipe(
//             finalize(() => {
//                 this.activeRequests--;

//                 if (this.activeRequests === 0) {
//                     this.loadingService.hide();
//                 }
//             })
//         );
//     }
//     //any, unknow // qualquer, desconhecido
// }

// //     // IMPLEMENTANDO a função intercept().
// //     intercept(
// //         request: HttpRequest<unknown>,
// //         next: HttpHandler
// //     ): Observable<HttpEvent<unknown>> {
// //         // Mudei o parâmetro do HttpRequest de "any" para "unknow, ie, qualquer tipo de request"
// //         // if (this.activeRequests === 0) {
// //         //     this.loadingService.show(); // Então, antes de qualquer requisição (getHero(), getHeroes() ou outra qq), antes da requisiçao ser feita, mostra o spinner (LOADINNG...).
// //         // }
// //         // this.activeRequests++;

// //         this.loadingService.show();
// //         return next.handle(request);

// //         // .pipe(
// //         //     // Depois que a REQUISIÇÃO SER FEITA (request), a gente vai finalizar. Como? Complementando com o pipe(finalize) depois do next.handle(request).
// //         //     finalize(() => {
// //         //         // Como a função (ARROW FUNCTION) tem mais de 1 linha de comandos, uso as chaves ({}) para colocar os comandos.
// //         //         // () => { comandos}  // () é porque a função não retorna nada.

// //         //         //this.activeRequests--;

// //         //         if (this.activeRequests === 0) {
// //         //             this.loadingService.hide();
// //         //         }
// //         //     })
// //         // );
// //     }
// // }

// // return next.handle(req).pipe(
// //     finalize(() => {
// //         this.activeRequests--;
// //         if (this.activeRequests === 0) {
// //             this.loadingService.hide();
// //         }
// //     })
// // );

// // this.loadingService.show(); // vai exibir o spinner na minha aplicação.
// // return next.handle(req).pipe(
// //     delay(1000), // delay de 1 segundo.
// //     finalize(() => this.loadingService.hide()) // finalize(). // Para funcionar, tenho que importar o RXJS.
// // ); // Eu consigo visualizar aqui o meu REQUEST, com o (req). Então, se eu quiser pegar algum valor do meu REQUEST eu consigo, através do meu "handle" ou "manipulador". //

// // SUBSTITUIÇÃO DESTE ARQUIVO, CONFORME O VÍDEO
// // https://www.youtube.com/watch?v=Kc0CbWyBxbU
// //
// // DESSA FORMA, ESTE ARQUIVO VEIO COMO PARA EXPORTAR UMA CONSTANTE, E MUDAMOS PARA
// // EXPORTAR UMA CLASSE.
// //
// // Veja o vídeo aula 25, complemento, parte 2. Explicação desta mudança.
// //export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
// //    let activeRequest = 0;
// //
// //    let loadingService = inject(LoadingService); // injetando LoadingService, como variável (let) e não como "constante" (const)
// //
// //    if (activeRequest === 0) {
// //        loadingService.show();
// //    };
// //    activeRequest++;
// //    return next.(req).pipe(
// //        finalize(() => {
// //            activeRequest--;
// //            if (activeRequest === 0) {
// //                loadingService.hide();
// //            }
// //        })
// //        // No pipe(), nós fizemos (colocamos) o finalize().
// //        // Como o finalize() Pé uma ARRAY FUNCTION que tem mais de um comando (ie, vamos escrever mais de 1 linha), usamos as chaves ({}) para colocarmos os comandos nesta função.
// //    );
// //};
// // FEITO ESTA LÓGICA DESTE "INTERCEPTOR" (interceptador, antes da requisição ser feita ou obtida ou lá no backend por exemplo, como exemplo obter um HERÓI ou getHero()), E PODER MANIPULAR OS DADOS OU O CABEÇALHO DA REQUISIÇÃO POR EXEMPLO.
// // ESTA CONSTANTE É PASSADA NO provider LÁ NO app.config.ts E NO AppComponent.ts.
// //

// // Na aula 25, aprendi este conceito de "interceptor".
// //
// // Na versão do ANGULAR do professor, "loadingInterceptor" é uma Classe injetável (@Injectable).
// // Ela implementava a Classe HttpInterceptor, e quem (classe) injetava esse loadingIntercepor, recebia o proximo MANIPULADOR da requisição de um Observable (Observável).
// //      O que é um Observable RxJs + Angular?
// //      É uma técnica que lida com compartilhamento de dados, é muito usado no Angular e pode ser considerado uma versão melhor de uma promise.
// //
// //      A promise pode retornar apenas um valor e não pode ser cancelada, o “observable” pode retornar um fluxo de valores e pode ser cancelado. Existem três callbacks:
// //
// //      Complete();
// //      Next();
// //      Error().
// //
// // Como funciona o Subscribe?
// // O método subscribe invoca a função construtora passada para o Observable.
// // Isso significa que a inscrição em um Observable é o ponto em que ele começa
// // a executar sua lógica, em vez de durante a criação, como é comumente acreditado.
// // 25 de mar. de 2023
// //
// // O que é callback em API?
// // Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
// //
// // Para criar um "interceptor", digito na linha de comando:
// // "ng g interceptor core/interceptors/loading --skip-tests" // --skip-tests é para não gerar o arquivo de testes.
// //
// // Depois tenho que mudar o arquivo "app.config.ts", colocar a lógica de manipulação do REQUEST aqui no nesse arquivo, depois colocar no meu "loadingService" para mandar mostrar ele.
// // "interceptor":
// //    Em seu aplicativo Angular Se você precisa executar ações em cada solicitação ou resposta HTTP
// //    (como adicionar um cabeçalho de autorização), os HTTP Interceptors fornecem uma maneira limpa e
// //    centralizada de fazer isso. Isso mantém seus componentes focados em sua lógica principal.
// //    Além disso, os interceptors podem simplificar o tratamento de erros, o registro e até mesmo
// //    modificar dados de solicitação/resposta em tempo real — tudo sem desorganizar o código do seu aplicativo.
// //
// // Este LoadingInterceptor faz a implementação do HttpInterceptor.
// // O que significa esta implementação?
// //     - Ela exige que a gente tenha o método chamado Intercept().
// //     Este método Intercept(), ou seja, a gente vai fazer uma requisição: exemplo, eu quer um getHero() lá do meu backend. Então, antes realmente dessa requisição ser feita, eu posso fazer alguma operação aqui nesse Intercep(). Eu posso por exemplo, pegar o meu LoadingService (Loading...  giratório) e mandar mostrar.
// //     E ainda tem a opção de quando terminar a requisição (com sucesso ou com falha),
// //     a gente pode mandar esconder (hide) nosso "LOADING...".
// //
// //     Então, o intercept pode manipular uma requisição, antes e depois dela acontecer.
// //
// // Por que precisamos de interceptadores?
// //    https://medium.com/@mohsinogen/angular-17-http-interceptors-guide-417e7c8ffada
// //
// //    1) Lógica Centralizada:
// //    Interceptadores servem como um mecanismo centralizado para executar lógica antes ou depois de uma solicitação HTTP ser feita ou uma resposta ser recebida. Isso elimina a necessidade de espalhar lógica por vários componentes ou serviços, promovendo a reutilização e a manutenibilidade do código.
// //
// //    2) Autenticação e Autorização:
// //    Os interceptadores oferecem uma solução elegante para lidar com preocupações relacionadas à autenticação e autorização. Ao interceptar solicitações de saída, os desenvolvedores podem anexar cabeçalhos, tokens ou executar verificações de autenticação sem bagunçar a base de código do aplicativo.
// //
// //    3) Tratamento de erros:
// //    Interceptar respostas HTTP permite que os desenvolvedores implementem mecanismos robustos de tratamento de erros. Os interceptadores podem interceptar respostas de erro, transformá-las em mensagens significativas e agilizar a propagação de erros por todo o aplicativo.
// //
// //    4) Transformação de solicitação e resposta:
// //    Com interceptadores, os desenvolvedores podem transformar facilmente payloads de solicitação ou dados de resposta. Isso permite cenários como registro de solicitação/resposta, serialização/desserialização de dados ou mapeamento de resposta para modelos de domínio.
// //
// //    Implementação em Angular
// //    Os HTTP Interceptors do Angular são perfeitamente integrados ao framework Angular, oferecendo uma abordagem simplificada para interceptar tráfego HTTP. Abaixo está a implementação do HTTP Interceptor no projeto autônomo Angular 17.
// //
// //    Neste interceptor, adicionaremos apenas um cabeçalho de autorização na solicitação e também trataremos os erros.
