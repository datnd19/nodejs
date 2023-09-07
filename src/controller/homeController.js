import userServices from "../service/userServices";
const handelHomePage = (req, res) => {
  return res.render("home.ejs");
};

const handelUserPage = async (req, res) => {
  // model -> get data
  let userList = await userServices.getListUser();
  return res.render("user.ejs", { userList });
};

const handelCreateNewUSer = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
  userServices.createNewUser(email, password, username);

  return res.send("user.ejs");
};

module.exports = {
  handelHomePage,
  handelUserPage,
  handelCreateNewUSer,
};
