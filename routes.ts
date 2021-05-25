import { Router, request, response } from "express";
import { SettingsController } from "./src/controllers/SettingsController";
import { UsersController } from "./src/controllers/UsersController";
import { MessagesController } from "./src/controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };