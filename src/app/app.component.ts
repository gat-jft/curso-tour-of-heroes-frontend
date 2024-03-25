

import { Component } from "@angular/core";
// Conforme a organização por FEATURES.
//
// Feature = Componente, Característica, recurso, funcionalidade.
// No caso, nosso código foi ORGANIZADO por Components.
//
// Organizar por FEATURE é melhor que organizar por CoreModule.
//
// Nessa organização, eu não não posso ter NENHUM Component aqui no AppComponent,
// ie não posso importar nenhum Component aqui, pq ele é o PRINCIPAL.
// Em cada FEATURE (Component ou DivisãoImportante do Código), eu crio 1 Module.
// - Em cada FEATURE eu crio um Module referente. Coloco (faço referência) nele a rota (routerLink) DELE (então vai ser 1 rota prá cada Componente, e não mais agrupar todas as rotas num arquivo só),
//                                                coloco também o Material, o FlexLayout, o FormModule para Input (ex[(ngModel)] = "hero.name")) etc,
//                                                ie, coloco TUDO QUE É NECESSÁRIO PRA ESTA FEATURE FUNCIONE (ie INDIVIDUALMENTE).
// - Com isso, a gente acaba tendo no nosso AppComponent (antigo AppModule) mais enxuto, nosso AppRoutingModule mais enxuto.
// - No nosso AppComponent só vai estar declarado SÓ ele.
//
//
// A gente coloca também a rota específica de cada um. Já que cada um FEATURE ficou responsável também por sua ROTA.
// Não esquecer de colocar o forRoot(routes) passando a rota (arquivo routes).
// Usando a ROTA INDIVIDUALMENTE (em cada feature), não posso usar o .forRoot(routes) mais.
// Porque?
//  -Porque o .forRoot() eu uso todas ROTAS num arquivo (ou Módule também) só.
//  Como eu vou usar várias ROTAS em cadas Module específico de cada FEATURE, tenho que usar o método forChild(routes),
//  já que ele é específico de cada um, e não mais da RAIZ.
//       Eles serão Modules FILHOS do AppRoutingModule, colocado no AppComponente (Componente PRINCIPAL).
//
//          Então, eu vou IMPORTAR (os Modules) e DECLARAR (os Components), o Component referente, o RouterModule, o MaterialModule, FlexlayoutModule, FormsModule (para input do usuário).
//           <router-outlet><router-outlet>, no arquivo .HTML, É ONDE VAI SER ENCAIXADO o routerLink.
// - Tiro a Pasta Material da pasta Core, e coloco ele na pasta App.
//
// No AppComponent (que substituiu o AppModule), eu importo os Módules referente à cada FEATURE.
//
// Assim, em cada Component (FEATURE) que são: dasboard, heroes, heroes-detail, material, villains; que são DashboardComponent, HeroesComponent ...,
// eu deveria criar Modules (Móduls, ie arquivos declarados com o @NgModule em cada Pasta (Component como dashboard, heroes)) dessa.
//    Sendo 1 Module referente ao Component (ie o próprio Component), 1 Module com a ROTA referente aquele Component.
//
// No arquivo referente às ROTAS (o app.routes.ts), eu ))

import { HttpClient } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AppRoutingModule } from "./app-routing.module";
import { LoadingComponent } from "./core/components/loading/loading.component";
import { MessagesComponent } from "./core/components/messages/messages.component";
import { ToolbarComponent } from "./core/components/toolbar/toolbar.component";
import { CoreModule } from "./core/core.module";
import { MenuItem } from "./core/models/menu-item.model";
import { MaterialModule } from "./material/material.module";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",

    imports: [
        //CommonModule, // Não preciso dele aqui, pq ele já vem EXPORTADO do CoreModule. // Quando um Módulo NOVO, o ANGULAR sempre adiciona o CommomModule. // CommomModule tem geralmente NgFor, NgIf. Que são as diretivas (comandos If, For, Swich) padrões já construídas, pra gente poder usar dentro desse Módulo NOVO.
        //FormsModule,  // Também vem importado do CoreModule.
        // @angular
        // Não usei nada do ANGULAR, aqui, pq o CommomModule e o FormsModule, veio importado do CoreModule.
        // app
        CoreModule,
        // Pq eu não precisei colocar a CONSTANTE "routes" nos imports ou declarações do AppRoutingModule?
        //- É pq AppRouting Module eu crie como MÓDULO, daí ele não é um COMPONENT.
        //  E a CONSTANTE "routes" já é "exportada" através do RoutingModule.forRoot(routes) ou, pelo comando RoutingModule.forChild(routes) se fosse o caso.
        AppRoutingModule,
        //
        MaterialModule,
        MessagesComponent,
        ToolbarComponent,
        MatFormFieldModule,
        MatInputModule,
        LoadingComponent,
    ],
})
export class AppComponent {
    title = "Tour of Heroes";

    constructor(private http: HttpClient) {}

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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MessagesComponent } from "./messages/messages.component";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
    imports: [
        CommonModule,
        RouterOutlet,
        HeroesComponent,
        FormsModule,
        HeroDetailComponent,
        MatToolbarModule,
        MessagesComponent,
    ],
})
export class AppComponent {
    title = "Tour of Heroes";
}
