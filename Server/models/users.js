'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    nome: {
      type:DataTypes.STRING,
      validate: {len: [3,100]}
    },
    email: {
      type: DataTypes.STRING,
      validate: {isEmail:true}
     },
    senha: DataTypes.STRING,
    cargo: {
      type: DataTypes.STRING,
    validate: { funcaoCargos: function(dados){
      if(dados !== 'comum' && dados !== 'vendedor' && dados !== 'admin') throw new Error('precisa especificar o cargo')
    }}
    },
    verificado: DataTypes.BOOLEAN
  }, 
  
  {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};