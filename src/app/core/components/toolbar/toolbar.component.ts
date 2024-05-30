import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout"; // Para disponibilizar o Flex Layout pra mim, que alinha os elementos de maneira elegante e poderosa pra gente.
import { FlexLayoutServerModule } from "@angular/flex-layout/server"; // Preciso também deste pacote para disponibilizar o FlexLayout pra mim. Tenho que colocar também no atributo "imports" deste Component.
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router"; // O RouterOutlet faz parte do módulo RouterModule.
import { MaterialModule } from "../../../material/material.module";
import { Component, Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router"; // O RouterOutlet faz parte do módulo RouterModule.
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout"; // Para disponibilizar o Flex Layout pra mim, que alinha os elementos de maneira elegante e poderosa pra gente.
import { FlexLayoutServerModule } from "@angular/flex-layout/server"; // Preciso também deste pacote para disponibilizar o FlexLayout pra mim. Tenho que colocar também no atributo "imports" deste Component.
import { MaterialModule } from "../../material/material.module";
import { MenuItem } from "../../models/menu-item.model";

// import { AppRoutingModule } from "./app-routing.module";
//    ESSE IMPORT é NÃO aplicável, já que no ANGULAR 17 não tem mais módulos.
//    Assim, é possível marcar componentes, diretivas e pipes como standalone: true. As classes Angular marcadas como
//    standalone não precisam ser declaradas em um NgModule e emitem um erro caso declaradas.

@Component({
    selector: "app-toolbar",
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule,
        MatProgressSpinner,
        FlexLayoutModule,
        FlexLayoutServerModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        FlexLayoutServerModule,
    ],
    templateUrl: "./toolbar.component.html",
    styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
    @Input() title = ""; // @Input é importado do @Angular/core. // Input@ é um campo (variável) de entrada de dados
    @Input() title = ""; // @Input é importado do @Angular/core.
    @Input() menuItems: MenuItem[] = []; // menuItems é um ARRAY. Um ARRAY (vetor) de tipos MenuItem. // Toda variável deve ser inicializada com algum valor. Mesmo que vazio.
}
