let endpoint = 'http://api.coinlayer.com/api/live?access_key=1b560d83dbab812e2781a03d1d38eb32&target=GBP&symbols=BTC,ETH,BCH,LTC,DASH,XRP,XLM'

const root = document.getElementById('root')

fetch(endpoint)
  .then(res => {
    if (!res.ok) {
      return Promise.reject('Something went wrong')
    }
    return res.json()
  })
  .then(data => {
    let rates = data.rates
    console.log(rates)
    let arrOfRatesObj = Object.entries(rates).map(([key, value]) => `<li class='currency'>${key}<span class='currencyValue'> - ${value}</span></li>`)
    root.innerHTML = `<ul class='cryptoList'>${arrOfRatesObj}</ul>`    
  })
  .catch(error => {
    console.log('error is', error)
  })
