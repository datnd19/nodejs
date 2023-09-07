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
  router.post("/users/create-user", homeController.handelCreateNewUSer);
  router.post("/delete-user/:id", homeController.handelDeleteUser);
  return app.use("/", router);
};

export default initWebRoutes;
