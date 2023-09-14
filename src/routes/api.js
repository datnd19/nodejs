import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
const router = express.Router();
/**
 *
 * @param {*} app - express app
 */

const initApiRoutes = (app) => {
  //path, URL
  // REST API
  // POST , GET, DELETE, UPDATE
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.handelRegister);
  router.post("/login", apiController.handelLogin);

  router.get("/user/read", userController.readApi);
  router.post("/user/create", userController.createApi);
  router.put("/user/update", userController.updateApi);
  router.delete("/user/delete", userController.deleteApi);
  return app.use("/api/v1", router);
};

export default initApiRoutes;
