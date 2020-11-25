"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Restaurants",
            [
                {
                    name: "The Chum Bucket",
                    location: "Bikini Bottom",
                    cuisine: "Burgers",
                    takeOut: "true",
                    restaurantImage: "/imgs/chumbucket.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "The Krusty Krab",
                    location: "Bikini Bottom",
                    cuisine: "Burgers",
                    takeOut: "false",
                    restaurantImage: "/imgs/krustykrab.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "City Wok",
                    location: "Colorado Springs",
                    cuisine: "Asian fuision",
                    takeOut: "true",
                    restaurantImage: "/imgs/citywok.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Druken Clam",
                    location: "Quahog",
                    cuisine: "Burgers",
                    takeOut: "false",
                    restaurantImage: "/imgs/chumbucket.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete("Restaurants", null, {});
    },
};
