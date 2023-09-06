import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejs",
});

const handelHomePage = (req, res) => {
  return res.render("home.ejs");
};

const handelUserPage = (req, res) => {
  // model -> get data
  return res.render("user.ejs");
};

const handelCreateNewUSer = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  // simple query
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
  return res.send("user.ejs");
};

module.exports = {
  handelHomePage,
  handelUserPage,
  handelCreateNewUSer,
};
