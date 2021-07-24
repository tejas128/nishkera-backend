const {createPool}=require('mysql')
require("dotenv").config()
const pool=createPool({
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10,

})
 module.exports=pool