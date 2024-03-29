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
