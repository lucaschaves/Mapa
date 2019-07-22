const routes = require("express").Router();
const Controller = require("../../app/controllers/mercado.controller");

routes.get("/", Controller.index);
routes.get("/:id", Controller.show);
routes.post("/", Controller.store);
routes.put("/:id", Controller.update);
routes.delete("/:id", Controller.destroy);

module.exports = routes;
