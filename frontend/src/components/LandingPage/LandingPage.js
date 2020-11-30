import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetch } from "../../store/csrf";
import RestaurantDineIn from "./RestaurantsDisplay/DineIn";
import DateReservation from "../DateReservation/DateReservation";
import RestaurantSearch from "../RestaurantSearch/RestaurantSearch";

//style
import "./LandingPage.css";
import SearchResults from "../SearchResults/SearchResults";

export default function LandingPage() {
    const [searching, setSearching] = useState(false);

    const term = useSelector((state) => {
        return state.search.term;
    });

    useEffect(() => {
        if (term === "") {
            setSearching(false);
        } else {
            setSearching(true);
        }
    }, [term]);

    return (
        <div className="main_container">
            <div className="top_section-container">
                <DateReservation className="reservation_bar" />
            </div>
            <div>
                <label className="restaruant_container-name">
                    Available Now
                </label>
                <div className="form-dinein">
                    {term && searching ? (
                        <SearchResults className="search_bar-container"></SearchResults>
                    ) : (
                        <RestaurantDineIn />
                    )}

                    {/* <DateReservation handleSubmit={searchRestaurants} /> */}
                </div>
            </div>
        </div>
    );
}
