const USD = 4.7
const EUR = 5.5
const GBP = 6

const form = document.querySelector("form")
const currency = document.getElementById("currency")
const amount = document.getElementById("amount")
const footer = document.querySelector("main footer")
const spam = document.getElementById("description")
const result = document.getElementById("result")

form.addEventListener("submit", () =>{
    event.preventDefault()
    const hasCharacter = /\D+/g
    amount.value = amount.value.replace(hasCharacter, "")

    console.log(currency.value)

    switch (currency.value){
        case "USD":
            converte(USD, amount.value, "$")
            break
        case "EUR":
            converte(EUR, amount.value, "€")
            break
        case "GBP":
            converte(GBP, amount.value, "£")
            break

    }

})

function converte(currency, amount, symbol){
    try{
        spam.textContent = `${symbol} 1 = ${formatCurrencyBRL(currency)}`

        let total = String(currency * amount).replace(".",",")
        result.textContent = `${total} Reais`
        footer.classList.add("show-result")
    }catch (error){
        console.log(error)
        footer.classList.remove(show-result)
        alert("Não foi possível converter, tente novamente")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}