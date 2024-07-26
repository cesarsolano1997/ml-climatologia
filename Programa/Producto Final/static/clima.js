async function obtenerClima () {

    try {
        
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-8.415865257402158&lon=-78.75281617340886&appid=fc3f7c6ddd8923ee990ee39ffccb89f2&units=metric')
   
        const data = await resp.json()

        document.querySelector('#temperatura').innerHTML = data.main.temp
        document.querySelector('#humedad').innerHTML = data.main.humidity
        document.querySelector('#viento').innerHTML = data.wind.speed
        document.querySelector('#ciudad').innerHTML = data.name
        



        console.log()
   
    } catch (error) {
        
    }


}

obtenerClima()