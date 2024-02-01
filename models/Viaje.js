import Sequelize from "sequelize";
import db from "../config/db.js";

// Exportar el modelo de viajes, definido en la base de datos, utilizo .define donde declaro el objeto con
// cada nombre de columna de la base de datos, si no incluyo una, cuando haga la consulta no me va a traer esa columna
export const Viaje = db.define("viajes", {
  titulo: {
    type: Sequelize.STRING,
  },
  precio: {
    type: Sequelize.STRING,
  },
  fecha_ida: {
    type: Sequelize.DATE,
  },
  fecha_vuelta: {
    type: Sequelize.DATE,
  },
  imagen: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  disponibles: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
});
