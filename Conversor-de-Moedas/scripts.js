const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')




const convertValues = async() => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal);


    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar= data.USDBRL.high
    const euro= data.EURBRL.high
    const bitcoin= data.BTCBRL.high
    console.log (data)
    
    const currencyValueText = document.getElementById('currency-value-text')

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar);
    }

    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro);
    }
    if(select.value === '₿ Bitcoin'){
       currencyValueText.innerHTML = inputReal * bitcoin
    }
    console.log(select.value)
   

}
changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")
    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "imgs/EURO.png "
    }
    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "imgs/EUA.png "
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "imgs/BITCOIN.png "
    }
    console.log(select.value)

    convertValues()
}

button.addEventListener('click', convertValues)

select.addEventListener('change', changeCurrency)

