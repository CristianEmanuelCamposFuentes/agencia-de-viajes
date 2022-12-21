import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    
    res.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    

    res.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/testimoniales', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    const viajes = 'Cambiando de texto';

    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});

router.get('/viajes', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    

    res.render('viajes', {
        pagina: 'Viajes'
    });
});



export default router;
