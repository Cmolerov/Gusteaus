"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Reservation.belongsTo(models.User, { foreignKey: "userId" });
        }
    }
    Reservation.init(
        {
            dateTime: {
                allowNull: true,
                type: DataTypes.DATE,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "User" },
            },
            restaurantId: {
                allowNull: false,
                references: { model: "Restaurant" },
                type: DataTypes.INTEGER,
            },
            partySize: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "Reservation",
        }
    );
    return Reservation;
};
