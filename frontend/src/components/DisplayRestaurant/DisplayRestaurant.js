import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetch } from "../../store/csrf";
import ReviewForm from "../ReviewForm/ReviewForm";
import Reviews from "../Reviews/Reviews";

export default function DisplayRestaurant() {
    const [loading, setLoading] = useState(false);
    const [restaurant, setRestaurant] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/restaurants/${id}`);
                const fetchedRestaurant = res.data;
                console.log(fetchedRestaurant);
                if (fetchedRestaurant) setRestaurant(fetchedRestaurant);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchRestaurant();
    }, []);
    return (
        <>
            {restaurant ? (
                <div>
                    <p>{restaurant.name}</p>
                    <p>TakeOut : {restaurant.takeOut}</p>
                    <p>{restaurant.cuisine}</p>
                    <ReviewForm></ReviewForm>
                    <Reviews></Reviews>
                </div>
            ) : (
                <p>Loading..</p>
            )}
        </>
    );
}
