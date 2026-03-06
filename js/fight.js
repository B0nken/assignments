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

    create() {
        this.#element = document.createElement("div") //creates new element
        this.#element.className = "card"; //gives the new element a class

        const p1Phrase = this.#p1.catchphrase //gets the catchphrases
        const p2Phrase = this.#p2.catchphrase

        this.#element.innerHTML = `
        <div id="p1-${this.#p1.id}">
        <h3>${this.#p1.name}</h3> Skill level: ${this.#p1.skillevel}
        <strong>${p1Phrase}</strong>
        </div>
        
        <div id="p1-${this.#p2.id}">
        <h3>${this.#p2.name}</h3> Skill level: ${this.#p2.skillevel}
        <strong>${p2Phrase}</strong>
        </div>
        
        <button class="btn">Starta Fighten!</button>`;

        const btn = this.#element.querySelector(".btn")

        btn.addEventListner("click", () => {
            this.match();
        });

        return this.#element;
    }

    update() {
        this.#element.classList.add("finished")
        const btn = this.#element.querySelector("btn");
        btn.textContent = "Fight Klar"

        const p1Cont = this.#element.querySelector(`#p1-${this.#p1.id}`)
        const p2Cont = this.#element.querySelector(`#p2-${this.#p2.id}`)
    }

}

