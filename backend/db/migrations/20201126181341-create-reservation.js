"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Reservations", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            dateTime: {
                type: Sequelize.DATE,
            },
            userId: {
                allowNull: true,
                references: { model: "Users" },
                type: Sequelize.INTEGER,
            },
            restaurantId: {
                allowNull: false,
                references: { model: "Restaurants" },
                type: Sequelize.INTEGER,
            },
            partySize: {
                allowNull: false,
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Reservations");
    },
};
