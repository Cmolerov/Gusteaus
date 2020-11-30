import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

//style
import "./index.css";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink className="nav_bar-link-login" to="/login">
                    Log In
                </NavLink>
                <NavLink className="nav_bar-link-signup" to="/signup">
                    Sign Up
                </NavLink>
            </>
        );
    }

    return (
        <div className="nav_bar">
            <i className="nav_bar-logo" />
            <NavLink className="nav_bar-link-home" exact to="/">
                Home
            </NavLink>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
