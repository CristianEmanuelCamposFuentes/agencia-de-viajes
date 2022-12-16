import express from 'express';
import router from './routes/index.js';


const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Agregar router
app.use('/', router);


// app.get('/', (request, response) => {
//     response.send('Hola Mundo');
//     response.json({
//         id: 1
//     });
//     response.render()
// })


app.listen(port,() =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});