import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../material/material.module";

@Component({
    selector: "app-page-not-found",
    standalone: true,
    imports: [MaterialModule, RouterModule, MaterialModule], // Para o Material usado no template.

    // Aqui entrará as informações IN-LINE, do arquivo.css, que foi excluído.
    template: `
        <mat-card>
            <mat-card-title>404: Page not-found</mat-card-title>

            <mat-card-content>
                <p>We couldn-t find that page! Not even with x-ray vision</p>
            </mat-card-content>

            <mat-card-actions>
                <button mat-raised-button color="primary" routerLink="/">
                    Take Me Home
                </button>
            </mat-card-actions>
        </mat-card>
    `,
    // Nas CRASES (``), eu coloco o código do arquivo .css.
    //
    // O <button> é um mat-raised-button.
    //    Eu coloco os atributos do <button> antes de fechar o '>' dele.
    //    Se o <button> tiver um TEXTO, coloco entre <button></button>.
    //
    // We couldn-t find that page! Not even with x-ray vision = "Não podemos encontrar esta página! Nem mesmo com a visão de raio-x"
    // Take Me Home = "Me leva pra casa"
    // NÃO EXISTEM MAIS AS INFORMAÇÕES ABAIXO. Pq apaguei desse Component (pasta) os arquivos .html e o .css
    //templateUrl: './page-not-found.component.html', // Foi substituído por somente "template:'',".
    //styleUrl: './page-not-found.component.scss'

    styles: [
        `
            :host {
                text-align: center;
            }
        `,
    ],
    // Os ESTILOs, eu já não coloco entre CRASEs (``).
    // O ESTILO eu coloco entre COLCHETES, porque é um ARRAY de estilos: Então quer dizer que eu posso ter mais de 1 estilo, ou mais de 1 arquivo .css.
    // Quando eu falo em "host", eu tô dizendo que é todo este Component (o PageNotFound). Ou seja, o que está hospedando o nosso HTML (template).  // E aí, o texto dele vai ficar no centro.
})
export class PageNotFoundComponent {}
