// Esse MODEL é um um modelo de um ItemDeMenu. Ele tem um íconem, um routerLink (uma rota) e um TextoDicaDoMaterial (dica do Material).
// Então ele é um MODEL, assim como o HeroModel, que tem um Id e um Name: IdDoHerói é um NumeroDoHerói.
export interface MenuItem {
    icon: string;
    routerLink: string;
    toolTipText: string;
}
