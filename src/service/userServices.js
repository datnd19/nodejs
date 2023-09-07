import bcrypt from "bcryptjs";
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejs",
});

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

const getListUser = () => {
  connection.query("SELECT * FROM users", function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
};

module.exports = {
  createNewUser,
  getListUser,
};
