import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { MessagesComponent } from "./components/messages/messages.component";
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

const COMPONENTS = [MessagesComponent, ToolbarComponent, PageNotFoundComponent];
const MODULES = [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
];

@NgModule({
    declarations: [], // Aqui é para eu declarar os MÓDULOS: MessagesComponent e ToolbarComponent são "standAlone".   Daí NÃO podem ser declarados num Module.
    imports: [COMPONENTS, MODULES], // Quando um Módulo NOVO, o ANGULAR sempre adiciona o CommomModule. // CommomModule tem geralmente NgFor, NgIf. Que são as diretivas (comandos If, For, Swich) padrões já construídas, pra gente poder usar dentro desse Módulo NOVO.
    exports: [COMPONENTS, MODULES],
})
export class CoreModule {
    /*
      // Esse CONSTRUTOR desta Classe (Módulo) não pode ser usado em nosso projeto, pq o CoreModule é usado em vários Components.
      // Ele pode ser bloqueado, pq nossos Components são na versão do ANGULAR com os Components "standAlone", ie, sem a necessidade de estar em um Módulo.
      //     
      // E NO NOSSO PROJETO NEM EXISTE ESSE MÓDULO AppModule. Existe o AppComponent.

        constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
            if (parentModule) {
                throw new Error(`ModuleName has already been loaded. 
                    Import ModuleName once, only, in the root AppModule.`);
            }
            // Estamos criando no nosso Módulo (que é uma Classe qualquer também), no CONSTRUTOR deste Module, uma variável chamada "parentModule". // Só que eu tô colocando pra essa variável "parentModule" 2 informações (através de 2 Diretivas): Uma que esta variável é OPCIONAL, e a outra (a @SkipSelf().  // A parentModule começa com uma ?, como ela não é obrigatória. É a diretiva @Optional().
            // Já o @SkipTest(), é para  testar:
            //   Uma vez que que o CoreModule for importado em algum lugar dos Sistema (que a gente espera que seja lá no AppModule), esse "parentModule" vai ter um valor, que é o valor do carregamento desse CoreModule.   ,
            //   if (parentModule), ou seja:  SE TIVER ESSE parentModule.
            //      Então, do momento que ele for carregado, se um 2° for tentar carregar, ele vai lançar uma EXCEÇÃO: "O CoreModule já foi carregado. Importe esse Módulo no AppModule".
            //
            // Outra coisa: Eu coloco uma STRING entre ASPAS DUPLAS (""), ou entre CRASES (` `).
            // Entre '', o VS muda prá "" automaticamente prá funcionar.
            //    MAS, QUANDO for uma interpolação, não funciona "" ou ''. // Só funciona com a STRING entre CRASES duplas. (` `)
        }
    */
}

/*
    // Código abaixo (um CONSTRUTOR), é pra gente BLOQUEAR o CoreModule, para que ele não seja importado em outros Mòdulos: para que ele seja importado somente no AppModule.

        constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        if (parentModule) {
            throw new Error(`ModuleName has already been loaded. 
                Import ModuleName once, only, in the root AppModule.`);
        }
    }    
*/
