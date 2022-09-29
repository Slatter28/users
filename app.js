
const express = require('express');

const app = express();


app.get('/me',(req,res)=>{

    res.status(200).json({
        nombre:'Roger Matamoros',
        edad: '25 años',
        pais: 'Ecuador'
    })

})

app.post('/metas',(req,res)=>{
    res.status(200).json({
        hobbies:['Programar', 'Nadar', 'Videojuegos']
    })
})

app.patch('/metas',(req,res)=>{
    res.status(200).json({
        hobbies:['Mejorar mi ingles', 'Aprender dockers']
    })
})


app.put('/business',(req,res)=>{
    res.status(200).json({
        empresas :['Alegra', 'Google', 'Mercado']
    })
})

app.listen(8080,()=>{
    console.log('servidor iniciado en el 8080')
})

