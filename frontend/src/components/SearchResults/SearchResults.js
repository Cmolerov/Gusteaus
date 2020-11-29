import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
    const restaurants = useSelector((state) => {
        return state.search.restaurants;
    });

    const term = useSelector((state) => {
        return state.search.term;
    });

    return (
        <div>
            {restaurants && restaurants[0] ? (
                restaurants.map((restaurant) => (
                    <div className="restaurant_container" key={restaurant.id}>
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
                ))
            ) : (
                <p>No Restaurants</p>
            )}
        </div>
    );
}
