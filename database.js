const express = require("express");
const app = express();
const Sequelize = require("sequelize");

////Database Connection
const sequelize = new Sequelize("task", "root", "falana", {
  dialect: "mysql",
  host: "localhost",
});

/////Database Model
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then((result) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });

exports.create = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username: username,
    password: password,
  })
    .then((result) => {
      res.json({
        message: "User created Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getall = (req, res, next) => {
  User.findAll()
    .then((result) => {
      result.forEach((element) => {
        element.dataValues;
      });

      res.json({
        message: "Success",
        output: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
