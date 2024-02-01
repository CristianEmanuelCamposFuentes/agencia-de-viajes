import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

// Se debe tener una sola instancia de app, no se puede crear otra mas, y definir un nuevo router
// Asi utilizamos la misma instancia de express, y extendemos Router
const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);

export default router;
