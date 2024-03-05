import { Hero } from './hero.model';

export const HEROES: Hero[] = [
  { id: 1, name: 'Wolverine' },
  { id: 2, name: 'Homem Aranha' },
  { id: 3, name: 'Batman' },
  { id: 4, name: 'Mulher Maravilha' },
  { id: 5, name: 'Pantera Negra' },
  { id: 6, name: 'Mulher Gato' },
  { id: 7, name: 'Capitão Marvel' },
  { id: 8, name: 'Hulk' },
  { id: 9, name: 'Homem de Ferro' },
  { id: 10, name: 'Capitão América' },
];

/*
   Esses dados são SÍNCRONOS:

   Isso quer dizer que estes dados estão aqui no nosso código
   Então, a gente obtém ele no mesmo momento que a gente pediu
   esses dados (no caso, uma lista de Heróis).

   Só que no mundo real, isso não ocorre.
   Porque?
   - Porque a gente vai buscar esses dados de um BACK-END.

   Então, nosso FRONT-END vai fazer uma chamada a um BACK-END,
   e esse BACK-END pode demorar um tempo.

   Então, vamos dar um exemplo:
   Demos 100 milisegundos. Esse dado pode estar em outro país,
   em outro estado ...
   Então, vai ocorrer um atraso (um DELAY).

   Então, do jeito que tá hoje, não vai funcionar, se a gente
   adequar com um BACK-END.

   Então, agora a gente vai entrar num conceito chamado
   OBSERVABLE.

 */
