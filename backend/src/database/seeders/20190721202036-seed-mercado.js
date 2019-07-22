"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "mercados",
      [
        {
          nome: "Mercado",
          descricao: "Alpha",
          latitude: -27.453187,
          longitude: -53.937184
        },
        {
          nome: "Mercado",
          descricao: "Betha",
          latitude: -27.452653,
          longitude: -53.936978
        },
        {
          nome: "Mercado",
          descricao: "Delta",
          latitude: -27.452162,
          longitude: -53.936777
        },
        {
          nome: "Mercado",
          descricao: "Gama",
          latitude: -27.451887,
          longitude: -53.932263
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mercados", null, {});
  }
};
