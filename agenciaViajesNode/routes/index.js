import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    res.render('inicio');
});

router.get('/nosotros', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    const viajes = 'Cambiando de texto';

    res.render('nosotros', {
        viajes
    });
});



export default router;
