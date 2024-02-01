// Importar el framework Express para el desarrollo web
import express from "express";

// Importar las rutas definidas en el archivo 'index.js'
import router from "./routes/index.js";

// Importar la configuración de la base de datos
import db from "./config/db.js";

// Crear una instancia de Express
const app = express();

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

// Definir el puerto del servidor, usando el valor proporcionado por el entorno o el valor predeterminado 4000
// process.env.PORT es una variable de entorno, en local no va a existir, pero si cuando sea corriendo en un servidor
const port = process.env.PORT || 4000;

// Solucion alternativa //
// let port = 4000;
// const portArg = process.argv[2];
// if(portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))){
//     port = parseInt(portArg, 10);
// }

// Configurar el motor de vistas como PUG
app.set("view engine", "pug");

// Middleware: Obtener el año actual y configurar variables locales para las vistas

app.use((req, res, next) => {
  const year = new Date();

  // Configurar variables locales accesibles en las vistas
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";

  // Llamar a next() para pasar al siguiente middleware
  return next();
});

// Middleware: Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Middleware: Definir la carpeta pública para archivos estáticos
app.use(express.static("public"));

// Middleware: Agregar las rutas definidas en el archivo 'index.js'
// Use se encarga de ejecutar el middleware, soportando todos los verbos HTTP
app.use("/", router);

// Prueba de get
app.get("/contacto", (req, res) => {
  res.send(
    `El servidor está funcionando nuevamente en el puerto ${port} , en la ruta /contacto`
  );
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
