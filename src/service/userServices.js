import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

//hash password
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  let hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
};

const createNewUser = (email, password, username) => {
  let hashPass = hashPassword(password);
  // simple query
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};

const getListUser = async () => {
  // create the connection, specify bluebird as Promise
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejs",
    Promise: bluebird,
  });
  //   connection.query("SELECT * FROM users", function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //       return users;
  //     }
  //     users = results;
  //     return users;
  //   });
  // query database
  const [rows, fields] = await connection.execute("SELECT * FROM users");
  return rows;
};

module.exports = {
  createNewUser,
  getListUser,
};
