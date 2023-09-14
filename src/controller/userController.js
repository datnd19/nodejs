import userApi from "../service/userApi";
const readApi = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let data = await userApi.readUserWithPaginate(+page, +limit);
      //services: create user
      if (data) {
        return res.status(200).json({
          EM: data.EM,
          EC: data.EC,
          DT: data.DT,
        });
      }
    } else {
      let data = await userApi.readUser();
      //services: create user
      if (data) {
        return res.status(200).json({
          EM: data.EM,
          EC: data.EC,
          DT: data.DT,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};

const createApi = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};

const updateApi = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};

const deleteApi = async (req, res) => {
  try {
    let data = await userApi.deleteUser(req.body.id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server",
      EC: -3,
      DT: "",
    });
  }
};

module.exports = {
  readApi,
  createApi,
  updateApi,
  deleteApi,
};
