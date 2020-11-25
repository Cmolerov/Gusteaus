"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Restaurants", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Restaurants");
    },
};
