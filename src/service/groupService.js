import db from "../models";

const getGroup = async () => {
  try {
    let data = await db.Group.findAll({
      order: [["name", "ASC"]],
    });
    return {
      EM: "Get Group success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "Error from services",
      EC: -2,
      DT: [],
    };
  }
};

module.exports = {
  getGroup,
};
