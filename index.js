const express = require('express')
const app= express()

const path = require('path')

app.listen(3000, () =>{

    console.log('Aplicacion corriendo en el puerto 3000')
})

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'tarea.html'))

    })
