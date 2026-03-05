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

    match() {
        if (this.played) return false; //cant be played if already played

        const skill1 = this.#p1.skillevel
        const skill2 = this.#p2.skillevel

        const chance = skill1 / (skill1 + skill2) //get a value for player 1 between 0 - 1

        if (Math.random() < chance) { //randomizes a number between 0 - 1
            this.#winner = this.#p1 //if p1 number is higher than the random number p1 wins

        } else {
            this.#winner = this.#p2 //if p1 number is lowwer than the random number p2 wins
        }
    }

}