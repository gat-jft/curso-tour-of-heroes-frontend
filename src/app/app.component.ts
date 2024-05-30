import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { HeroesComponent } from "./heroes/heroes.component";
import { MenuItem } from "./core/models/menu-item.model";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
    imports: [
        //CommonModule, // Não preciso dele aqui, pq ele já vem EXPORTADO do CoreModule. // Quando um Módulo NOVO, o ANGULAR sempre adiciona o CommomModule. // CommomModule tem geralmente NgFor, NgIf. Que são as diretivas (comandos If, For, Swich) padrões já construídas, pra gente poder usar dentro desse Módulo NOVO.
        //FormsModule,  // Também vem importado do CoreModule.
        CoreModule,
        HeroesComponent,
    ],
})
export class AppComponent {
    title = "Tour of Heroes";
    menuItems: MenuItem[] = [
        {
            icon: "dashboard",
            routerLink: "/dashboard",
            toolTipText: "Dasboard",
        },
        {
            icon: "sports_martial_arts",
            routerLink: "/heroes",
            toolTipText: "Heroes",
        },
    ];
}

/*
import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router"; // O RouterOutlet faz parte do módulo RouterModule.
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./core/components/messages/messages.component";
import { routes } from "./app.routes";
import { FlexLayoutModule } from "@angular/flex-layout"; // Para disponibilizar o Flex Layout pra mim, que alinha os elementos de maneira elegante e poderosa pra gente.
import { FlexLayoutServerModule } from "@angular/flex-layout/server"; // Preciso também deste pacote para disponibilizar o FlexLayout pra mim. Tenho que colocar também no atributo "imports" deste Component.
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CoreModule } from "./core/core.module";

// import { AppRoutingModule } from "./app-routing.module";
//    ESSE IMPORT é NÃO aplicável, já que no ANGULAR 17 não tem mais módulos.
//    Assim, é possível marcar componentes, diretivas e pipes como standalone: true. As classes Angular marcadas como
//    standalone não precisam ser declaradas em um NgModule e emitem um erro caso declaradas.

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
    imports: [
        CommonModule,
        HeroesComponent,
        FormsModule,
        HeroDetailComponent,
        MessagesComponent,
        RouterOutlet,
        RouterModule,
        FlexLayoutModule,
        FlexLayoutServerModule,
        DashboardComponent,
        CoreModule,
    ],
})
export class AppComponent {
    title = "Tour of Heroes";
}
*/
