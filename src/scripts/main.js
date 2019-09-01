let endpoint = 'http://api.coinlayer.com/api/live?access_key=1b560d83dbab812e2781a03d1d38eb32&target=GBP&symbols=BTC,ETH,BCH,LTC,DASH,XRP,XLM'

fetch(endpoint)
  .then(res => {
    if (!res.ok) {
      return Promise.reject('Something went wrong')
    }
    return res.json()
  })
  .then(data => {
    let rates = data.rates
    let arrOfRates = Object.keys(rates).map(key => {
      return [key, rates[key]]
    })
    console.log(arrOfRates)
    console.log('THE RATES', data.rates)
    const root = document.getElementById('root')
    root.innerHTML = arrOfRates
  })
  .catch(error => {
    console.log('error is', error)
  })
