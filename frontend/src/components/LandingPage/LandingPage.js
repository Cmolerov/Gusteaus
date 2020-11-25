import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetch } from "../../store/csrf";
import RestaurantDineIn from "./RestaurantsDisplay/DineIn";

//style
import "./LandingPage.css";

export default function LandingPage() {
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
    return (
        <div>
            {/* <div className="top_section-container"></div> */}
            <div className="form-dinein">
                <RestaurantDineIn />
            </div>
        </div>
    );
}
