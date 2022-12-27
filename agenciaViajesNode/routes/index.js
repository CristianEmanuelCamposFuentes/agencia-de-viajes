import express from 'express';
import { paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje } from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/testimoniales', paginaTestimoniales);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);


export default router;
