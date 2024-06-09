


// // import { NgModule } from "@angular/core"; // DESNECESSÁRIO. Usaria este IMPORT se este arquivo referenciasse à um Module (@NgModule). Mas como é uma CONSTANTE, não preciso gravar ela (constante) como um Componente, pq na verdade não é um Componente. Um Component é composto de 3 arquivos (HTML, CSS, TS. O TS um JavaScript com mais funcionalidades). // MAS MESMO SENDO UM arquivo é não um Component (composto por 3 arqs) e nem um Module, TENHO QUE COLOCAR A EXTESÃO .ts.  // Um Component eu uso "@NgComponent" e um Module eu uso "@NgModule".
// import { NgModule } from "@angular/core";
// import { Routes } from "@angular/router";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { HeroDetailComponent } from "./heroes/components/hero-detail/hero-detail.component";
// import { HeroesComponent } from "./heroes/components/heroes/heroes.component";


// // Esse arquivo app.routes.ts, é onde eu vou declarar minhas rotas. É uma constante GLOBAL.
//  const routes: Routes = [
//     { path: "", redirectTo: "/dashboard", pathMatch: "full" }, // Para nossa ROTA INICIAL (iniciar a nossa aplicação) a rota REdirecione automaticamente para o "/dashboard". E com isso, não começar exibindo na tela só com o MatToolBar. // O path dele é vazio, ou seja, a URL depois do www.localhost/ é nada.  // Esse REDIRECT vai ser pro '/dashboard' (URL /dashboard)   // Para rotas vazias, eu tenho que adicionar o pathMatch: 'full' -> é pra que ele pegue a rota (o '/dashboard') e coloque ele como nossa ROTA INICIAL, e o MATCH (o que tá entre na URL), seja dessa propriedade FULL. // match() encontra uma string num expressão por exemplo.
//     { path: "dashboard", component: DashboardComponent },
//     { path: "heroes/:id", component: HeroDetailComponent }, // Quando eu digitar "/heroes/" + o id de algum Hero, eu vou querer que abra o Componente HeroDetailComponent. // Com isso, eu adicionei essa entrada na nossa ROTA.
//     { path: "heroes", component: HeroesComponent },
// ];

// @NgModule({
//     declarations:[routes],
//     imports:[],
//     exports: [routes]
// })
// export class

// /* Match = correspondência.

//    A estratégia de correspondência de caminho 'completa' corresponde ao URL inteiro.
//       * É importante fazer isso ao redirecionar rotas de caminho vazio.
//       * Caso contrário, como um caminho vazio é um prefixo de qualquer URL,
//       * o roteador aplicaria o redirecionamento mesmo durante a navegação
//       * para o destino do redirecionamento, criando um loop infinito.
// */
import { Routes } from '@angular/router';

export const routes: Routes = [];

import { Routes } from "@angular/router";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";


// // Esse arquivo app.routes.ts, é onde eu vou declarar minhas rotas. É uma constante GLOBAL.
//  const routes: Routes = [
//     { path: "", redirectTo: "/dashboard", pathMatch: "full" }, // Para nossa ROTA INICIAL (iniciar a nossa aplicação) a rota REdirecione automaticamente para o "/dashboard". E com isso, não começar exibindo na tela só com o MatToolBar. // O path dele é vazio, ou seja, a URL depois do www.localhost/ é nada.  // Esse REDIRECT vai ser pro '/dashboard' (URL /dashboard)   // Para rotas vazias, eu tenho que adicionar o pathMatch: 'full' -> é pra que ele pegue a rota (o '/dashboard') e coloque ele como nossa ROTA INICIAL, e o MATCH (o que tá entre na URL), seja dessa propriedade FULL. // match() encontra uma string num expressão por exemplo.
//     { path: "dashboard", component: DashboardComponent },
//     { path: "heroes/:id", component: HeroDetailComponent }, // Quando eu digitar "/heroes/" + o id de algum Hero, eu vou querer que abra o Componente HeroDetailComponent. // Com isso, eu adicionei essa entrada na nossa ROTA.
//     { path: "heroes", component: HeroesComponent },
// ];

// @NgModule({
//     declarations:[routes],
//     imports:[],
//     exports: [routes]
// })
// export class

// /* Match = correspondência.

//    A estratégia de correspondência de caminho 'completa' corresponde ao URL inteiro.
//       * É importante fazer isso ao redirecionar rotas de caminho vazio.
//       * Caso contrário, como um caminho vazio é um prefixo de qualquer URL,
//       * o roteador aplicaria o redirecionamento mesmo durante a navegação
//       * para o destino do redirecionamento, criando um loop infinito.
// */
