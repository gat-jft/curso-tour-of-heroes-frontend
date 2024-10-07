import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoadingService } from "../../services/loading.service";
@Component({
    selector: "app-loading", // SELETOR usado no html como <app-loading></app-loading>.
    standalone: true,
    imports: [
        MatProgressSpinnerModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
    ], // Preciso colocar o import AQUI, e não no topo. // Assim, o que está no topo, aparecerá automaticamente.
    templateUrl: "./loading.component.html",
    styleUrl: "./loading.component.scss",
})
export class LoadingComponent {
    // Estamos INJETANDO nosso LoadingService
    constructor(public loadingService: LoadingService) {
        // O NORMAL da gente chamar um Observable é assim.
        // Assim o subscribe ele ERA responsável por disparar, e aí, qualquer alteração que a gente
        // tivesse lá no nosso getHeroes() por exemplo, o subscribe() executava o que tava
        // dentro dos ().
        //    Agora, a gente vai fazer uma outra forma de subscribe() que o ANGULAR traz prá nós:
        //    Vamos fazer o subscribe diretamente na nossa VIEW (template loadingComponent.html).
        //this.loadingService.loading$.subscribe()
    }
}
