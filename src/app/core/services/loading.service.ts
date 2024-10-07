import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
// Este SERVICE ele vai ser responsável por dizer se é pra ser exibido LOADING CIRCULAR (LOADING...) ou não.
export class LoadingService {
    // Qual a diferença do BehaviorSubject para o Observable?
    //    No Service (HeroService), a "origem dos dados" (Observable http) ela está lá no backend: é um Observable. Aqui no LoadingService, ele está em nossas mãos: é o BehaviorSubject (Comportamento Assunto); um Subject (Assunto, texto) e não um Objeto.
    //
    //
    // BEHAVIOR SUBJECT
    // A variant of Subject that requires an initial value and emits its current  value whenever it is subscribed to.
    //
    // SUBJECT
    // A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like Event Emitters.
    // Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call next to feed values as well as error and complete.
    //
    // subscribe()
    // the function that is called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values can be nexted, or an error method can be called to raise an error, or complete can be called to notify of a successful completion.

    private loadingSubject = new BehaviorSubject<boolean>(false);

    // BOAS PRÁTICAS: Quando se cria um atributo do tipo Observable, é comum que se coloque o '$' no final.
    //
    //   "asObservable": Como um Subject ele é tanto a "origem dos dados" quanto poder ser um "Observável".
    //                   Então agora eu tô pegando o loadingService (variável), e dizendo que eu quero só o Observable dele.
    //                   Que este Observable seja atribuído à nossa propriedade chamada "loading$".
    //
    //                    Já aqui (neste Service), como a gente criou o BehaviorSubject (a origem dos dados está com a gente).
    //                    Nós somos os responsáveis por mudar os valores.
    //
    //                    Então, o Subject é um forma que a gente pode mudar os valores, e o BehaviorSubject além da gente poder
    //                    mudar os valores a gente ainda pode fornecer um valor inicial.
    //                         Assim, BehaviorService começou criando aqui com o valor false.
    //
    //       Foi assim criado também a variável loading$, pra que alguém fora da minha Classe, quem for olhar para os valores
    //       falso ou verdadeiro do loadingSubject (variável), que eles olhem apenas para
    //       um atributo do tipo Observable. Eu não quero que ninguém FORA da minha Classe tenha responsabilidade de alterar
    //       o valor do meu loading (loadingSubject).
    //          Assim, criamos esse loading$ a seguir na próxima 2a. linha, que a gente vai usar em outros Components (fora deste Service).
    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    // Esses métodos a seguir, eles vão colocar o valor do loading$ (variável), ou como true ou como false. Porque?
    // - Porque uma vez que eu altero o valor do loadingService, e aí eu coloco "asObservable()" pro loading$, automaticamenteo valor do loading$ pra
    //   quem tiver ESCUTANDO (quem chamou) via "subcribe()" vai mudar.
    hide(): void {
        this.loadingSubject.next(false);
    }

    show(): void {
        this.loadingSubject.next(true);
    }

    // Não vamos precisar do construtor.
    //constructor() {}
}
