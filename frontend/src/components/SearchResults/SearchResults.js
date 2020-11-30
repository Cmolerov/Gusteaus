import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

export default function SearchResults() {
    const history = useHistory();
    const restaurants = useSelector((state) => {
        return state.search.restaurants;
    });

    const term = useSelector((state) => {
        return state.search.term;
    });
    const handleRestaurantClick = (e, restaurantId) => {
        e.preventDefault();
        history.push(`/restaurants/${restaurantId}`);
        console.log(restaurantId);
    };
    return (
        <div>
            {restaurants && restaurants[0] ? (
                restaurants.map((restaurant) => (
                    <div className="try">
                        <div
                            className="restaurant_container"
                            key={restaurant.id}
                            onClick={(e) =>
                                handleRestaurantClick(e, restaurant.id)
                            }
                        >
                            <img
                                className="restaurant_img"
                                src={
                                    window.location.origin +
                                    restaurant.restaurantImage
                                }
                                alt=""
                            />
                            <label>{restaurant.name}</label>
                            <label>Location: {restaurant.location}</label>
                            <label>Cuisine: {restaurant.cuisine}</label>
                            <label></label>
                            <br />
                        </div>
                    </div>
                ))
            ) : (
                <p>No Restaurants</p>
            )}
        </div>
    );
}
