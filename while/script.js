// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
// creo la lista
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// creo una variabile let con valore 0
let i = 0;
//uso while per avere un ciclo

while (i < list.length) {
    console.log(list[i]);
    i++;
}

