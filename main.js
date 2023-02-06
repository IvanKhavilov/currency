let buyUSD = 28.28;
let sellUSD = 28.48;
let buyEUR = 33.16;
let sellEUR = 33.55;
let buyPLN = 6.97;
let sellPLN = 7.40;

document.getElementById('buyUSD').innerText = buyUSD;
document.getElementById('sellUSD').innerText = sellUSD;
document.getElementById('buyEUR').innerText = buyEUR;
document.getElementById('sellEUR').innerText = sellEUR;
document.getElementById('buyPLN').innerText = buyPLN;
document.getElementById('sellPLN').innerText = sellPLN;

let btnBuy = document.getElementById('btnBuy');
let btnSell = document.getElementById('btnSell');
let resultOperation = document.getElementById('result');

btnBuy.onclick = () => {
    const n = document.getElementById('itemCurrency').options.selectedIndex;
    const itemCurrency = document.getElementById('itemCurrency').options[n].text;
    const sum = document.getElementById('sum').value;
    calcResultBuy(itemCurrency, sum);
}

btnSell.onclick = () => {
    const n = document.getElementById('itemCurrency').options.selectedIndex;
    const itemCurrency = document.getElementById('itemCurrency').options[n].text;
    const sum = document.getElementById('sum').value;
    calcResultSell(itemCurrency, sum);
}

calcResultBuy = (itemCurrency, sum) => {
    let result;
    switch (itemCurrency) {
        case "USD":
            result = buyUSD * sum;
            break;
        case "EUR":
            result = buyEUR * sum;
            break;
        case "PLN":
            result = buyPLN * sum;
            break;
    }
    resultOperation.innerText = `Для покупки ${sum} Вам нужно  ${result} грн`;
}

calcResultSell = (itemCurrency, sum) => {
    let result;
    switch (itemCurrency) {
        case "USD":
            result = sellUSD * sum;
            break;
        case "EUR":
            result = sellEUR * sum;
            break;
        case "PLN":
            result = sellPLN * sum;
            break;
    }
    resultOperation.innerText = `За  ${sum} Вы покупаете ${result} грн`;
}
