const request = require('request')

const weather_check = (my_city, callback) => {
    const weather_key = '61750d8cdd2bc53d46f980f8bfdc5288'
    const url = 'http://api.weatherstack.com/current?access_key=' + weather_key + '&query=' + my_city
    
    request({url, json: true},(error,{body}) =>{
        if(error){
            callback('Unable to connect with Server!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log("in api()",body)
            callback(undefined, body)
        }
    })
}

module.exports = {weather_check : weather_check }