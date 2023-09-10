import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
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
  router.get("/edit-user/:id", homeController.handelGetUserEdit);
  router.post("/users/update-user", homeController.handelUpdateUser);
  // REST API
  // POST , GET, DELETE, UPDATE
  router.get("/test/api", apiController.testApi);
  return app.use("/", router);
};

export default initWebRoutes;
