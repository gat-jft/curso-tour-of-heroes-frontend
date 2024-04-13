import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppComponent } from "./app.component";

// Esse arquivo app.routes.ts, é onde eu vou declarar minhas rotas. É uma constante GLOBAL.
export const routes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" }, // Para nossa ROTA INICIAL (iniciar a nossa aplicação) a rota REdirecione automaticamente para o "/dashboard". E com isso, não começar exibindo na tela só com o MatToolBar. // O path dele é vazio, ou seja, a URL depois do www.localhost/ é nada.  // Esse REDIRECT vai ser pro '/dashboard' (URL /dashboard)   // Para rotas vazias, eu tenho que adicionar o pathMatch: 'full' -> é pra que ele pegue a rota (o '/dashboard') e coloque ele como nossa ROTA INICIAL, e o MATCH (o que tá entre na URL), seja dessa propriedade FULL. // match() encontra uma string num expressão por exemplo.
    { path: "dashboard", component: DashboardComponent },
    { path: "heroes", component: HeroesComponent },
];

/* Match = correspondência.
  
   A estratégia de correspondência de caminho 'completa' corresponde ao URL inteiro.
      * É importante fazer isso ao redirecionar rotas de caminho vazio.
      * Caso contrário, como um caminho vazio é um prefixo de qualquer URL,
      * o roteador aplicaria o redirecionamento mesmo durante a navegação
      * para o destino do redirecionamento, criando um loop infinito.




*/
