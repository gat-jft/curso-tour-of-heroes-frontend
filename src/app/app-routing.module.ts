// import { NgModule } from "@angular/core"; // DESNECESSÁRIO. Usaria este IMPORT se este arquivo referenciasse à um Module (@NgModule). Mas como é uma CONSTANTE, não preciso gravar ela (constante) como um Componente, pq na verdade não é um Componente. Um Component é composto de 3 arquivos (HTML, CSS, TS. O TS um JavaScript com mais funcionalidades). // MAS MESMO SENDO UM arquivo é não um Component (composto por 3 arqs) e nem um Module, TENHO QUE COLOCAR A EXTESÃO .ts.  // Um Component eu uso "@NgComponent" e um Module eu uso "@NgModule".
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./heroes/components/hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/components/heroes/heroes.component";

// Esse arquivo app.routes.ts, é onde eu vou declarar minhas rotas. É uma constante GLOBAL.
export const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" }, // Para nossa ROTA INICIAL (iniciar a nossa aplicação) a rota REdirecione automaticamente para o "/dashboard". E com isso, não começar exibindo na tela só com o MatToolBar. // O path dele é vazio, ou seja, a URL depois do www.localhost/ é nada.  // Esse REDIRECT vai ser pro '/dashboard' (URL /dashboard)   // Para rotas vazias, eu tenho que adicionar o pathMatch: 'full' -> é pra que ele pegue a rota (o '/dashboard') e coloque ele como nossa ROTA INICIAL, e o MATCH (o que tá entre na URL), seja dessa propriedade FULL. // match() encontra uma string num expressão por exemplo.
    { path: "dashboard", component: DashboardComponent },
    { path: "heroes/:id", component: HeroDetailComponent }, // Quando eu digitar "/heroes/" + o id de algum Hero, eu vou querer que abra o Componente HeroDetailComponent. // Com isso, eu adicionei essa entrada na nossa ROTA.
    { path: "heroes", component: HeroesComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)], // Funcionou exportando o "routes" por "forChild()", pq este Module aqui (AppRoutingModule) não está na RAIZ.
    exports: [RouterModule],
})
export class AppRoutingModule {}
