'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: "userId" });
      Review.belongsTo(models.Restaurant, { foreignKey: "restaurantId" });
    }
  };
  Review.init({
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
            content: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};