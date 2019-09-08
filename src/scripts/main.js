let endpoint = 'http://api.coinlayer.com/api/live?access_key=1b560d83dbab812e2781a03d1d38eb32&target=GBP&symbols=BTC,ETH,BCH,LTC,DASH,XRP,XLM'

const root = document.getElementById('root')

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    let rates = data.rates, currency = data.target, currencySign
    
    switch (currency) {
      case 'GBP':
        currencySign = '£'
        break
      case 'USD':
        currencySign = '$'
        break
      case 'EUR':
        currencySign = '€'
        break
    }

    let listItem = Object.entries(rates).map(([key, value]) => `<li class='currency'>${key}<span class='currencyValue'> - ${currencySign}${value.toFixed(2)}</span></li>`)
    root.innerHTML = `<ul class='cryptoList'>${listItem}</ul>`
  })
  .catch(error => {
    console.log('error is', error)
  })
