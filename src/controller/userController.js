import userApi from "../service/userApi";
const readApi = async (req, res) => {
  try {
    let data = await userApi.readUser();
    //services: create user
    if (data) {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
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

const deleteApi = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
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
