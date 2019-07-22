"use strict";
module.exports = (sequelize, DataTypes) => {
  const Mercado = sequelize.define(
    "Mercado",
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      latitude: DataTypes.DOUBLE,
      longitude: DataTypes.DOUBLE
    },
    {}
  );
  Mercado.associate = function(models) {
    // associations can be defined here
  };
  return Mercado;
};
