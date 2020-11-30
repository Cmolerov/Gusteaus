import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetch } from "../../store/csrf";
import ReviewForm from "../ReviewForm/ReviewForm";
import Reviews from "../Reviews/Reviews";

//style
import "./DisplayRestaurant.css";

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
                    <div className="display-background" />
                    <div className="display-container">
                        <div>
                            <img
                                className="res_img"
                                src={
                                    window.location.origin +
                                    restaurant.restaurantImage
                                }
                                alt=""
                            />
                            <h2>{restaurant.name}</h2>
                            <p>TakeOut : {restaurant.takeOut}</p>
                            <p>{restaurant.cuisine}</p>
                        </div>
                        {/* <div className="reviews-form">
                        <ReviewForm></ReviewForm>
                        <Reviews></Reviews>
                    </div> */}
                    </div>
                </div>
            ) : (
                <p>Loading..</p>
            )}
        </>
    );
}
