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
                        <div className="container-parent">
                            <div className="container-1">
                                <img
                                    className="res_img"
                                    src={
                                        window.location.origin +
                                        restaurant.restaurantImage
                                    }
                                    alt=""
                                />

                                <p className="info-res">
                                    <h2 className="res_title">
                                        {" "}
                                        {restaurant.name}
                                    </h2>
                                    <p>Location:  {restaurant.location}</p>
                                    {/* <p>TakeOut : {restaurant.takeOut}</p> */}
                                    <p>Cuisine: {restaurant.cuisine}</p>
                                    <p className="description-res">
                                        Description:
                                    </p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident.
                                </p>
                            </div>
                            <div className="container-2">
                                <div className="restaurant_container-info">
                                    <h2>Hours of Operations</h2>
                                    <p>Mon-thurs: 8:00am - 9:00pm</p>
                                    <h2>Phone Number</h2>
                                    <p>TakeOut : {restaurant.takeOut}</p>
                                    <p>1-888-333-2212</p>
                                    <h2>Leave a Review</h2>
                                    <ReviewForm></ReviewForm>
                                    <div className="review-container">
                                        <Reviews></Reviews>
                                    </div>
                                </div>
                            </div>
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
