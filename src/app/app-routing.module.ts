// ESTE MÓDULO É DESNECESSÁRIO.
// Nas novidades do ANGULAR 17, é que não tem mais modules.
//     O que é um module?
//     Um module é um mecanismo para agrupar components, directives , pipes e services relacionados, de
//     forma a combinar com outros módulos para criar um aplicativo. Uma aplicação angular pode ser pensada
//     como um quebra-cabeça onde cada peça (ou cada módulo) é necessária para poder ver a imagem completa.
//     https://www.macoratti.net/17/06/angcli_pag5.htm#:~:text=Um%20module%20%C3%A9%20um%20mecanismo,poder%20ver%20a%20imagem%20completa.

// import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { RouterModule, Routes } from "@angular/router";
// import { HeroesComponent } from "./heroes/heroes.component";

// const routes: Routes = [{ path: "heroes", component: HeroesComponent }];
// // Esse tipo Routes, ele faz parte de um MÓDULO do Angular, chamado @angular/router.
// // Como ele funciona? Dentro dele a gente vai especificar algumas ROTAS.
// // Ele é um ARRAY, e tem alguns atributos:
// //     path (caminho), e o componente inicial.
// //
// // Então, quando eu tiver por exemplo no "www.localhost:4200" ele vai colocar o "heroes" na URL,
// // ficando assim a URL: "www.localhost:4200/heroes"
// //
// // Daí, caso tenha na minha URL o "/heroes", o vou falar que o component "heroes" seja exibido
// // na nossa página.
// //
// // Devo adicionar também o pacote RouterModule, no import do @NgModule abaixo.

// @NgModule({
//     declarations: [], // Desnecessário esta declaração.
//     imports: [
//         CommonModule, // Desnecessário. CommomModule tem as diretivas NgIf, NgFor etc.
//         RouterModule.forRoot(routes),
//     ], // o "forRoot(routes)", estou falando que o eu quero que a minha aplicação inicial, ela inicie com esta constante "routes", acima.
//     exports: [RouterModule],
// })
// export class AppRoutingModule {}
