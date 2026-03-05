export class Fight {
    #p1; //private encapsulated fields so no other files change the winners or players
    #p2;
    #winner;
    #loser;
    #element;

    constructor(p1, p2) {
        this.#p1 = p1;
        this.#p2 = p2;
        this.#winner = null; //no winner at the start
    }

    get played() {
        return this.#winner !== null; //returns true if there is a winner
    }

    get winner() {
        return this.#winner //returns the entire object for winner
    }

}