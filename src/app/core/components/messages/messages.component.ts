import { Component } from "@angular/core";
import { MessageService } from "../../services/message.service";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

@Component({
    selector: "app-messages",
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatExpansionModule, MatListModule],
    templateUrl: "./messages.component.html",
    styleUrl: "./messages.component.scss",
})
export class MessagesComponent {
    // O objetivo é que seja mostrado nesse Componentt os valores, que a gente  colocar lá nosso array de Messagess.
    // Então, eu ou injetar o MessagesService aqui dentro.
    constructor(public messagesService: MessageService) {}
}
