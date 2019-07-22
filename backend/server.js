const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const models = require("./src/app/models");

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", require("./src/app/routes/mercado.route"));

models.sequelize
  .sync()
  .then(() => {
    console.log("Conectado ao Mysql");
    app.listen(port, () => {
      console.log("Servidor rodando na porta: " + port);
    });
  })
  .catch(error => {
    console.log(error);
  });
