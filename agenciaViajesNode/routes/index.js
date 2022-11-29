import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    res.send('Inicio');
});

router.get('/nosotros', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    res.send('Nosotros');
});

router.get('/contacto', (req, res) => { // Request - lo que enviamos : Response - Lo que express nos responde
    res.send('Contacto');
});

export default router;
