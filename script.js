const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertButton = document.getElementById("convert");
const swapButton = document.getElementById("swap");
const result = document.getElementById("result");

// Валюталардың KZT бойынша бағамдары
const rates = {
    KZT: 1,
    USD: 540,
    EUR: 635,
    RUB: 6.5
};

// Конвертация функциясы
function convertCurrency() {
    const value = Number(amount.value);

    if (value <= 0) {
        result.textContent = "Соманы дұрыс енгізіңіз";
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Алдымен KZT-ке айналдырамыз
    const kzt = value * rates[from];

    // Содан кейін қажетті валютаға айналдырамыз
    const converted = kzt / rates[to];

    result.textContent =
        ${converted.toFixed(2)} ${to};
}

// Конвертация батырмасы
convertButton.addEventListener("click", convertCurrency);

// Валюталарды ауыстыру
swapButton.addEventListener("click", () => {
    const temp = fromCurrency.value;

    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    convertCurrency();
});

// Сома өзгерген кезде автоматты есептеу
amount.addEventListener("input", convertCurrency);

// Алғашқы нәтиже
convertCurrency();

