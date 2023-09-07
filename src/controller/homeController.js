import userServices from "../service/userServices";
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
  //userServices.createNewUser(email, password, username);
  userServices.getListUser();
  return res.send("user.ejs");
};

module.exports = {
  handelHomePage,
  handelUserPage,
  handelCreateNewUSer,
};
