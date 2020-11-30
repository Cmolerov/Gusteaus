import React, { useState, useEffect } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { fetch } from "../../../store/csrf";

//style
import "./DineIn.css";

export default function RestaurantDineInSearch() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [restaurants, setRestaurants] = useState(null);
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/restaurants");
                const fetchedRestaurants = res.data;

                if (fetchedRestaurants) {
                    const takeOut = fetchedRestaurants.filter((restaurant) => {
                        return restaurant.takeOut === true;
                    });
                    const dineIn = fetchedRestaurants.filter((restaurant) => {
                        return restaurant.takeOut === false;
                    });

                    setRestaurants({ takeOut, dineIn });
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchRestaurants();
    }, []);

    const handleRestaurantClick = (e, restaurantId) => {
        e.preventDefault();
        history.push(`/restaurants/${restaurantId}`);
        console.log(restaurantId);
    };
    return (
        <>
            <div>
                <h2 className="container-title">Available Now</h2>
                <div className="dineIn_container-card">
                    {restaurants && restaurants.dineIn ? (
                        restaurants.dineIn.map((restaurant) => (
                            <div className="try">
                                <div
                                    className="restaurant_container"
                                    key={restaurant.id}
                                    onClick={(e) =>
                                        handleRestaurantClick(e, restaurant.id)
                                    }
                                >
                                    {/* <div className="image-div"> */}
                                    <img
                                        className="restaurant_img"
                                        src={
                                            window.location.origin +
                                            restaurant.restaurantImage
                                        }
                                        alt=""
                                    />
                                    {/* </div> */}
                                    <label>{restaurant.name}</label>
                                    <label>
                                        Location: {restaurant.location}
                                    </label>
                                    <label>Cuisine: {restaurant.cuisine}</label>
                                </div>
                            </div>
                        ))
                    ) : (
                        <li>loading</li>
                    )}
                </div>
            </div>
            <br />
            <div>
                {/* <div className="top_section-container"></div> */}
                <h2 className="container-title"> For Takeout</h2>
                <div className="takeOut_container-card">
                    {restaurants && restaurants.takeOut ? (
                        restaurants.takeOut.map((restaurant) => (
                            <div className="try">
                                <div
                                    className="restaurant_container"
                                    key={restaurant.id}
                                    onClick={(e) =>
                                        handleRestaurantClick(e, restaurant.id)
                                    }
                                >
                                    {/* <div className="image-div"> */}
                                    <img
                                        className="restaurant_img"
                                        src={
                                            window.location.origin +
                                            restaurant.restaurantImage
                                        }
                                        alt=""
                                    />
                                    {/* </div> */}
                                    <label>{restaurant.name}</label>
                                    <label>
                                        Location: {restaurant.location}
                                    </label>
                                    <label>Cuisine: {restaurant.cuisine}</label>
                                </div>
                            </div>
                        ))
                    ) : (
                        <li>loading</li>
                    )}
                </div>
            </div>
        </>
    );
}
