var dotenv = require('dotenv');
dotenv.config();

let dbuser = process.env.DBUSER;
let dbpassword = process.env.DBPASSWORD;
let db = process.env.DB;
console.log(db,dbuser,dbpassword)
module.exports = {
    HOST: "localhost",
    USER: dbuser,
    PASSWORD: dbpassword,
    DB: db,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
