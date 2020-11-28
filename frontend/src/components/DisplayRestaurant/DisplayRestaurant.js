import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetch } from "../../store/csrf";

export default function DisplayRestaurant () {
    const [loading, setLoading] = useState(false);
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/restaurants/:id");
                const fetchedRestaurant = res.data;

                if (fetchedRestaurant) setRestaurant(fetchedRestaurant);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchRestaurant();
    }, []);
    return (
        <div key={restaurant.name}></div>
    )
}