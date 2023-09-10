const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test api",
  });
};
const handelRegister = (req, res) => {
  console.log(req.body);
};
module.exports = {
  testApi,
  handelRegister,
};
