console.log('Client side javascript file is loaded!')
// const fetch_data = "/weather"

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const cityname = document.querySelector('#cityname')
const country = document.querySelector('#country')
const temp = document.querySelector('#temp')
const my_img = document.querySelector('#my_img')
const status_img = document.querySelector('#status')
let path

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location = search.value

    cityname.textContent = 'Loading...'
    // messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
            if (data.error){
                cityname.textContent = data.error
            } else {
                console.log(data)
                cityname.textContent = data.location.name
                country.textContent = data.location.country
                temp.textContent = data.current.temperature + " °C"
                path = data.current.weather_icons[0]
                // console.log("Message",path)
                my_img.setAttribute('src',path)
                status_img.innerHTML = data.current.weather_descriptions[0]


            }
        })
    })
})