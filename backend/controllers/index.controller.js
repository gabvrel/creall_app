const { Pool } = require('pg');
const dataInfo = require("./index.controller");

const pool = new Pool({    
host: 'localhost',
user: 'postgres',
password: 'porlaorda123',
database: 'yapa',
port: '5432'});

const getInfo = async (req, res) => {
    const response = await pool.query('SELECT * FROM ventas1819 limit 15');
    res.status(200).json(response.rows);
};

const sales = async (req, res) => {
    const response = await pool.query('SELECT * FROM cuentas_por_cobrar limit 15');
    res.status(200).json(response.rows);
}

module.exports = {getInfo , sales};

/* {    
    host: 'tuffi.db.elephantsql.com',
    user: 'pkdtduqs',
    password: 'Xe6R9AGp7AlNMgLSWJvFXZRI6AbthLW0',
    database: 'pkdtduqs',
    port: '5432'} */