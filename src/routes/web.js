import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();
/**
 *
 * @param {*} app - express app
 */

const initWebRoutes = (app) => {
  //path, URL
  router.get("/", homeController.handelHomePage);
  router.get("/user", homeController.handelUserPage);
  return app.use("/", router);
};

export default initWebRoutes;
