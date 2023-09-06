const handelHomePage = (req, res) => {
  return res.render("home.ejs");
};

const handelUserPage = (req, res) => {
  return res.render("user.ejs");
};

module.exports = {
  handelHomePage,
  handelUserPage,
};
