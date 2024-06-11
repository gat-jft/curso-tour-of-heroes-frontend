// import { NgModule } from "@angular/core"; // DESNECESSÁRIO. Usaria este IMPORT se este arquivo referenciasse à um Module (@NgModule). Mas como é uma CONSTANTE, não preciso gravar ela (constante) como um Componente, pq na verdade não é um Componente. Um Component é composto de 3 arquivos (HTML, CSS, TS. O TS um JavaScript com mais funcionalidades). // MAS MESMO SENDO UM arquivo é não um Component (composto por 3 arqs) e nem um Module, TENHO QUE COLOCAR A EXTESÃO .ts.  // Um Component eu uso "@NgComponent" e um Module eu uso "@NgModule".
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./core/components/page-not-found.component";

// Esse arquivo app.routes.ts, é onde eu vou declarar minhas rotas. É uma constante GLOBAL.
export const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" }, // Para nossa ROTA INICIAL (iniciar a nossa aplicação) a rota REdirecione automaticamente para o "/dashboard". E com isso, não começar exibindo na tela só com o MatToolBar. // O path dele é vazio, ou seja, a URL depois do www.localhost/ é nada.  // Esse REDIRECT vai ser pro '/dashboard' (URL /dashboard)   // Para rotas vazias, eu tenho que adicionar o pathMatch: 'full' -> é pra que ele pegue a rota (o '/dashboard') e coloque ele como nossa ROTA INICIAL, e o MATCH (o que tá entre na URL), seja dessa propriedade FULL. // match() encontra uma string num expressão por exemplo.

    //{ path: "dashboard", component: DashboardComponent }, // Não usaremos um Component mais. Usaremos abaixo um TESTE: Se na ROTA tiver "dasboard", roda o comando loadChildren (que tem um FUNCTION, uma Arrow function).
    //
    // ERRO: Tava dando um erro, dizendo "ERROR Error: ASSERTION ERROR: NgModule '_DashboardComponent' is not a subtype of 'NgModuleType'. [Expected=> null != null <=Actual]"
    // O professor usou o loadChildren para carregar o Componente, após o teste lógico.
    //   Daí, eu pesquisei na STACKOVERFLOW.COM e vi que "loadChildren:" é para uso geral.
    //   Como o Component (no caso "DashboardComponent") é standAlone (autônomo), tive que mudar de "loadChildren:" para "loadComponent:
    // 'c' é um apelido para a variável referente a um Component.
    {
        path: "dashboard",
        loadComponent: () =>
            import("./dashboard/dashboard.component").then(
                (c) => c.DashboardComponent
            ),
        // then = Então.
    },

    // Vamos fazer o mesmo carregamento LAZY LOADING acima para a ROTA "heroes". // Se tiver na ROTA a palavra "heroes", ...
    // Importando o heroes, a gente vai fazer um then().
    //
    // Então agora, quando rodar o 'heroes' ou o 'dashboard' na rota, eles vão sair do arquivo main.js, e vão ser arquivos separados, que vão ser carregados somente quando FOR necessário.
    //   Isso é LAZY LOADING (carregamento preguiçoso / tardio).
    //   Com isso a gente vai ter um carregamento mais rápido na nossa Aplicação, carregando só o necessário.
    //
    //
    {
        path: "heroes",
        loadComponent: () =>
            import("./heroes/components/heroes/heroes.component").then(
                (c) => c.HeroesComponent
            ),
    },

    {
        path: "heroes/:id",
        loadComponent: () =>
            import(
                "./heroes/components/hero-detail/hero-detail.component"
            ).then((c) => c.HeroDetailComponent),
        //component: HeroDetailComponent }, // Esta parte foi substituída pelo "loadComponent: ..." acima. // Quando eu digitar "/heroes/" + o id de algum Hero, eu vou querer que abra o Componente HeroDetailComponent. // Com isso, eu adicionei essa entrada na nossa ROTA.
    },

    // Indicação de 'PÁGINA NÃO ENCONTRADA'.
    //    Então se não deu MATCH (passou por tudo e não encontrou nada, ou não for igual):
    //    - Vamos criar um Component NOVO, dentro do Core (pasta Core), pq ele faz parte da aplicação.
    {
        path: "**",
        component: PageNotFoundComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)], // Funcionou exportando o "routes" por "forChild()", pq este Module aqui (AppRoutingModule) não está na RAIZ.
    exports: [RouterModule],
})
export class AppRoutingModule {}
