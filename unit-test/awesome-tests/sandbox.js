const fetch = require('node-fetch')
const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
        'apikey': '63fcf95d837c2bcdb7d10a150e779157'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data.rates.standard.value))
