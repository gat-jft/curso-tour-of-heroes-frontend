import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class MessageService {
    // O objetivo deste Serviço é a gente ter uma LISTA<de STRINGS>, que seriam as nossas mensagens, prá gente exibí-las embaixo da nossa VIEW.
    // Então, tudo que a gente for fazer:
    // Quando a gente OBTER os nossos HERÓIS, quando a gente CLICAR num  Herói específico, a gente vai terer essas informmações.

    // PROPRIEDADE "messages", vai ser um array de strings, e vou iniciá-la vazia.
    // "private":
    // Alguém que tenha acesso à um objeto MessageService, não pode modificar
    // essa propriedade (variável) "messages".
    // Só um objeto MessageService, poderá modificar, através dos métodos add() ou  clear().
    private messages: string[] = [];

    // Método "add()".
    // recebe uma string, e não retorna nada (void).
    add(message: string): void {
        // O método push() é do JavaScript. Serve prá adicionar um elemento (no caso uma STRING) no nosso ARRAY.
        this.messages.push(message);
    }

    // Método clear(): prá limpar as mensagens prá gente.
    clear(): void {
        this.messages = [];
    }

    // Como alguém de fora, que tem acesso a esta Classe, não pode modificar o
    // a variável "messages" deste Service (classe), criei este método para retornar
    // prá alguém de fora obtenha essa "messages".
    getMessages(): string[] {
        return this.messages;
    }
}
