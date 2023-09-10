import express from "express";
import apiController from "../controller/apiController";
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
  return app.use("/api/v1", router);
};

export default initApiRoutes;
