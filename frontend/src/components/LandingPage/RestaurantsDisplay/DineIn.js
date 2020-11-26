import React, { useState, useEffect } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetch } from "../../../store/csrf";

//style
import "./DineIn.css";

export default function RestaurantDineInSearch() {
    const [loading, setLoading] = useState(false);
    const [restaurants, setRestaurants] = useState(null);
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/restaurants");
                const fetchedRestaurants = res.data;

                if (fetchedRestaurants) setRestaurants(fetchedRestaurants);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchRestaurants();
    }, []);
    return (
        <div>
            {/* <div className="top_section-container"></div> */}
            <div className="dineIn_container-card">
                {restaurants ? (
                    restaurants.map((restaurant) => (
                        <div
                            className="restaurant_container"
                            key={restaurant.id}
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
                            <label>
                                Location:  {restaurant.location}
                            </label>
                            <label>Cuisine:  { restaurant.cuisine }</label>
                            <label></label>
                            <br />
                        </div>
                    ))
                ) : (
                    <li>loading</li>
                )}
            </div>
        </div>
    );
}
