import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input"; // Para eu colocar os itens (campos editáveis ou não, como address, email, id, name) dentro do MatCard
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip"; // Para DICAS (tips). É passar o mouse em cima do ÍCONE, e ele mostra a dica.

const MODULES = [
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
];
@NgModule({
    declarations: [],
    imports: [MODULES],
    exports: [MODULES],

import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input"; // Para eu colocar os itens (campos editáveis ou não, como address, email, id, name) dentro do MatCard
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip"; // Para DICAS (tips). É passar o mouse em cima do ÍCONE, e ele mostra a dica.
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
    ],
    exports: [
        FormsModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatFormFieldModule,
    ],
})
export class MaterialModule {}
