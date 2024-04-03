import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router"; // O RouterOutlet faz parte do módulo RouterModule.
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip"; // Para DICAS (tips). É passar o mouse em cima do ÍCONE, e ele mostra a dica.
import { routes } from "./app.routes";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout"; // Para disponibilizar o Flex Layout pra mim, que alinha os elementos de maneira elegante e poderosa pra gente.
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
        MatToolbarModule,
        MessagesComponent,
        RouterOutlet,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        FlexLayoutModule,
        MatTooltipModule,
    ],
})
export class AppComponent {
    title = "Tour of Heroes";
}
