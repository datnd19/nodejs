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

const readUserWithPaginate = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "email", "username", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });
    let pages = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPages: pages,
      users: rows,
    };
    return {
      EM: "get list success",
      EC: 0,
      DT: data,
    };
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
    let user = await db.User.findOne({
      where: { id: id },
    });
    if (user) {
      await user.destroy();
      return {
        EM: "Delete Success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "Error from server",
        EC: -1,
        DT: [],
      };
    }
  } catch (error) {
    return {
      EM: "Error from services",
      EC: -2,
      DT: [],
    };
  }
};
module.exports = {
  readUser,
  createUser,
  updateUser,
  deleteUser,
  readUserWithPaginate,
};
