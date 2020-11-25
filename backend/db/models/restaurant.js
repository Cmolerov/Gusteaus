"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Restaurant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Restaurant.init(
        {
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            location: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            cuisine: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            takeOut: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            },
            restaurantImage: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        },
        {
            sequelize,
            modelName: "Restaurant",
        }
    );
    return Restaurant;
};
