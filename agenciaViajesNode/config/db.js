// Importar las dependencias
import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config';

// Crear una instancia de Sequelize para la conexión a la base de datos
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

// Exportar la instancia de Sequelize
export default db;
