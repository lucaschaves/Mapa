const Mercado = require("../models").Mercado;

module.exports = {
  async index(req, res, next) {
    const retorno = await Mercado.findAll();
    return res.json(retorno);
  },

  async store(req, res) {
    const retorno = await Mercado.create(req.body);
    return res.json(retorno);
  },

  async show(req, res) {
    const retorno = await Mercado.findOne({
      where: { id: req.params.id }
    });
    return res.json(retorno);
  },

  async update(req, res) {
    await Mercado.update(req.body, {
      where: { id: req.params.id }
    });
    return res.send();
  },

  async destroy(req, res) {
    await Mercado.destroy({ where: { id: req.params.id } });
    return res.send();
  }
};
