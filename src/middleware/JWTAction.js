import jwt from "jsonwebtoken";
require("dotenv").config();
const createJWT = (payLoad) => {
  let key = process.env.JWT_SECRET;
  let token = null;
  try {
    token = jwt.sign(payLoad, key);
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let decoded = null;
  try {
    decoded = jwt.verify(token, key);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};

const checkUserJWT = (req, res, next) => {
  let cookies = req.cookies;
  if (cookies && cookies.jwt) {
    let token = cookies.jwt;
    let decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      return res.status(401).json({
        EC: -1,
        DT: "",
        EM: "not authenticated",
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: "",
      EM: "not authenticated",
    });
  }
};

const checkUserPermission = (req, res, next) => {
  if (req.user) {
    let email = req.user.email;
    let roles = req.user.groupWithRoles.Roles;
    let currentUrl = req.path;
    if (!roles || roles.length === 0) {
      return res.status(403).json({
        EC: -1,
        DT: "",
        EM: "don't have permission",
      });
    }
    let canAccess = roles.some((item) => item.url === currentUrl);
    if (canAccess === true) {
      next();
    } else {
      return res.status(403).json({
        EC: -1,
        DT: "",
        EM: "don't have permission",
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: "",
      EM: "not authenticated",
    });
  }
};

module.exports = {
  createJWT,
  verifyToken,
  checkUserJWT,
  checkUserPermission,
};
