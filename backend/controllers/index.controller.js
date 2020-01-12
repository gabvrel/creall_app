const { Pool } = require('pg');
const dataInfo = require("./index.controller");

const pool = new Pool(dataInfo);

const getInfo = async (req, res) => {
    const response = await pool.query('SELECT * FROM test');
    res.status(200).json(response.rows);
};



module.exports = {getInfo};