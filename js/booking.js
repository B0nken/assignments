export class Booking {

    #houseName
    #pricePerNight

    constructor(houseName, pricePerNight) {
        this.#houseName = houseName
        this.#pricePerNight = pricePerNight
    }

    sumTotal(days, addons, code) {
        let total = (this.#pricePerNight * days) + addons

        if (code.trim().toUpperCase() === "SPOOK20") {
            total = total * 0.8
        }
        
        return Math.round(total)
    }

    check(dateString, days) {
        const errors = []

        if (!dateString) {
            errors.push("Du måste välja ett datum för incheckning")
        } else {
            const chosenDate = new Date(dateString);
            const today = new Date()
            today.setHours(0, 0, 0, 0)

            if (chosenDate < today) {
                errors.push("Datum för incheckning måste vara efter idag")
            }
        }

        if (days < 1) {
            errors.push("Bokning kräver minst en vald natt")
        }
        return errors
    }

    getConfirmation(dateString, days, totalPrice) {
        return `<div class="success-box">
                <h3>Tack för din bokning!</h3>
                <p>Du har bokat <strong>${this.#houseName}</strong>.</p>
                <p><strong>Incheckning:</strong> ${dateString}</p>
                <p><strong>Antal nätter:</strong> ${days}</p>
                <hr>
                <p class="receipt-total"><strong>Totalt pris:</strong> ${totalPrice} kr</p>
                <p class="receipt-footer"><em>Vi ses i mörkret...</em></p>
            </div>`
    }
}