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
    const root = document.getElementById('root')
    root.innerHTML = arrOfRates
  })
  .catch(error => {
    console.log('error is', error)
  })

/**
 * Creates a dynamic list which takes in an array
 */
createList = array => {
  let list = document.createElement('ul')

  for (let i = 0; i < array.length; i++) {
    let listItem = document.createElement('li')

    listItem.appendChild(document.createTextNode(array[i]))
    list.appendChild(listItem)
  }
  return list
}
