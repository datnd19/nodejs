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
  return res.redirect("/user");
};

const handelDeleteUser = async (req, res) => {
  await userServices.deleteUser(req.params.id);
  return res.redirect("/user");
};

const handelGetUserEdit = async (req, res) => {
  let id = req.params.id;
  let userData = {};
  let user = await userServices.getUserEdit(id);
  if (user && user.length > 0) {
    userData = user[0];
  }
  return res.render("userUpdate.ejs", { userData });
};

const handelUpdateUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;
  console.log(email, username, id);
  await userServices.handelUpdateUserInfo(email, username, id);
  return res.redirect("/user");
};

module.exports = {
  handelHomePage,
  handelUserPage,
  handelCreateNewUSer,
  handelDeleteUser,
  handelGetUserEdit,
  handelUpdateUser,
};
