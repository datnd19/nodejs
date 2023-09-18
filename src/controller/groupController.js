import groupService from "../service/groupService";

const readApi = async (req, res) => {
  try {
    let data = await groupService.getGroup(req.body.id);
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
};
