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
                    restaurantImage: "/imgs/drunkenClam.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Apple Bee's",
                    location: "London",
                    cuisine: "American Pub",
                    takeOut: "false",
                    restaurantImage: "/imgs/appleBees.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "The CheeseCake Factory",
                    location: "Miami",
                    cuisine: "Pasta, Pizza, SeaFood",
                    takeOut: "false",
                    restaurantImage: "/imgs/cheeseCakeFactory.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Good Burger",
                    location: "Los Angeles",
                    cuisine: "Burger",
                    takeOut: "false",
                    restaurantImage: "/imgs/goodBurger.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Harry's Pizza",
                    location: "DownTown Miami",
                    cuisine: "Pizza",
                    takeOut: "true",
                    restaurantImage: "/imgs/harrysPizza.jpeg",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Krusty Burger",
                    location: "DownTown Miami",
                    cuisine: "Burger",
                    takeOut: "false",
                    restaurantImage: "/imgs/krustyBurger.jpeg",
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
