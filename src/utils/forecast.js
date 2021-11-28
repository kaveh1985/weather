const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=96c5ddc720a5501ad1a858eb95ae35ea&query=New%20York'

// request({ url:  url, json: true }, (error, response) => {
     
//      const data = response.body.current.temperature;
//      const data2 = response.body.current.feelslike;
//      console.log(`It is currently ${data} degress out. It feels like ${data2} degress out there.`)

// })




const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ddd28179d53bce4bbbf2cd61084494b1&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
        }
    })
}



  module.exports = forecast;