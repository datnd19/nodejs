import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

//hash password
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  let hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejs",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username]
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
  const [rows, fields] = await connection.execute("SELECT * FROM users");
  return rows;
};

const deleteUser = async (id) => {
  // create the connection, specify bluebird as Promise
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejs",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    "DELETE FROM users WHERE id=?",
    [id]
  );
};

module.exports = {
  createNewUser,
  getListUser,
  deleteUser,
};
