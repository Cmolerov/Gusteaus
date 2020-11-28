// const { User, Restaurant, Reservation } = require("../db/models");

// module.exports = async () => {
//     console.log("testing associations");
//     const user = await User.findOne({ email: "demo@user.io" });
//     console.log(user.id);
//     const restaurant = await Restaurant.findOne({ name: "The Chum Bucket" });
//     await Reservation.create({
//         userId: user.id,
//         restaurantId: restaurant.id,
//         // dateTime: "2020-11-26",
//         partySize: 2,
//     });
// };
