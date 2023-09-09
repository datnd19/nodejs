import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models";
//hash password
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  let hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  try {
    await db.User.create({
      email: email,
      password: hashPass,
      username: username,
    });
  } catch (error) {}
};

const getListUser = async () => {
  // create the connection, specify bluebird as Promise
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "nodejs",
  //   Promise: bluebird,
  // });
  // const [rows, fields] = await connection.execute("SELECT * FROM users");
  // return rows;

  let users = [];
  users = await db.User.findAll();
  return users;
};

const deleteUser = async (userId) => {
  // create the connection, specify bluebird as Promise
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "nodejs",
  //   Promise: bluebird,
  // });
  // const [rows, fields] = await connection.execute(
  //   "DELETE FROM users WHERE id=?",
  //   [id]
  // );
  await db.User.destroy({
    where: {
      id: userId,
    },
  });
};

const getUserEdit = async (userId) => {
  // create the connection, specify bluebird as Promise
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "nodejs",
  //   Promise: bluebird,
  // });
  // const [rows, fields] = await connection.execute(
  //   "Select * from users WHERE id=?",
  //   [id]
  // );
  // return rows;
  let user = {};
  user = await db.User.findOne({
    where: {
      id: userId,
    },
  });
  return user.get({ plain: true });
};

const handelUpdateUserInfo = async (email, username, id) => {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "nodejs",
  //   Promise: bluebird,
  // });
  // const [rows, fields] = await connection.execute(
  //   "UPDATE users SET email = ? , username = ?  WHERE id  = ?",
  //   [email, username, id]
  // );
  // return rows;
  await db.User.update(
    { email: email, username: username },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = {
  createNewUser,
  getListUser,
  deleteUser,
  getUserEdit,
  handelUpdateUserInfo,
};
