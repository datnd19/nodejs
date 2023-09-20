import LoginRegisterServices from "../service/LoginRegisterServices";
const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test api",
  });
};
const handelRegister = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.username ||
      !req.body.phone ||
      !req.body.password
    ) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: 1,
        DT: "",
      });
    }
    if (req.body.password && req.body.password.length < 4) {
      return res.status(200).json({
        EM: "Password must be more than 3 letters",
        EC: 1,
        DT: "",
      });
    }
    let data = await LoginRegisterServices.registerUser(req.body);
    //services: create user
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
    });
  } catch (e) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};

const handelLogin = async (req, res) => {
  try {
    if (!req.body.account || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: 1,
        DT: "",
      });
    }
    if (req.body.password && req.body.password.length < 4) {
      return res.status(200).json({
        EM: "Password must be more than 3 letters",
        EC: 1,
        DT: "",
      });
    }
    let data = await LoginRegisterServices.loginUser(req.body);
    res.cookie("jwt", data.DT.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    //services: create user
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = {
  testApi,
  handelRegister,
  handelLogin,
};
