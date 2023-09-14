import db from "../models";
const readUser = async () => {
  try {
    let newUser = await db.User.findAll({
      attributes: ["id", "email", "username", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
      nest: true,
    });
    if (newUser) {
      return {
        EM: "Get list user successfully",
        EC: 0,
        DT: newUser,
      };
    } else {
      return {
        EM: "Error",
        EC: -1,
        DT: "",
      };
    }
  } catch (error) {
    return {
      EM: "Error from server",
      EC: -2,
      DT: "",
    };
  }
};
const createUser = async (data) => {
  try {
    //user.
  } catch (error) {
    return {
      EM: "Error from server",
      EC: -2,
      DT: "",
    };
  }
};
const updateUser = async (data) => {
  try {
  } catch (error) {
    return {
      EM: "Error from server",
      EC: -2,
      DT: "",
    };
  }
};
const deleteUser = async (id) => {
  try {
  } catch (error) {
    return {
      EM: "Error from server",
      EC: -2,
      DT: "",
    };
  }
};
module.exports = {
  readUser,
  createUser,
  updateUser,
  deleteUser,
};
