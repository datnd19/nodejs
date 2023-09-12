import bcrypt from "bcryptjs";
import db from "../models";
import { json } from "body-parser";
import { Op } from "sequelize";
const checkEmailExist = async (userEmail) => {
  let isExist = await db.User.findOne({
    where: { email: userEmail },
  });
  if (isExist) {
    return false;
  }
  return true;
};

const checkPhoneExist = async (userPhone) => {
  let isExist = await db.User.findOne({
    where: { phone: userPhone },
  });
  if (isExist) {
    return false;
  }
  return true;
};

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  let hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
};

const registerUser = async (rawUser) => {
  try {
    let checkEmail = await checkEmailExist(rawUser.email);
    let checkPhone = await checkPhoneExist(rawUser.phone);
    if (checkEmail === false) {
      return {
        EM: "Email have exist",
        EC: 1,
      };
    }
    if (checkPhone === false) {
      return {
        EM: "Phone have exist",
        EC: 1,
      };
    }
    let bumPass = hashPassword(rawUser.password);

    await db.User.create({
      email: rawUser.email,
      username: rawUser.username,
      password: bumPass,
      phone: rawUser.phone,
    });
    return {
      EM: "Created successfully",
      EC: 0,
    };
  } catch (error) {
    return {
      EM: "Some thing wrong",
      EC: -2,
    };
  }
};

const checkPassword = (inputPassword, hashPass) => {
  return bcrypt.compareSync(inputPassword, hashPass); //true or false
};

const loginUser = async (rawUser) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: rawUser.account }, { phone: rawUser.account }],
      },
    });
    if (user) {
      let checkPass = checkPassword(rawUser.password, user.password);
      if (checkPass) {
        return {
          EM: "Login Successfully",
          EC: 0,
          DT: "",
        };
      } else {
        return {
          EM: "Email or phone or password not is incorrect",
          EC: 1,
          DT: "",
        };
      }
    } else {
      return {
        EM: "Email or phone or password not is incorrect",
        EC: 1,
        DT: "",
      };
    }
  } catch (error) {
    return {
      EM: "Some thing wrong",
      EC: -2,
    };
  }
};

module.exports = {
  registerUser,
  loginUser,
};
