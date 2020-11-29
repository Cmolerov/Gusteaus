import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage/SignupForm";
import LandingPage from "./components/LandingPage/LandingPage";
import DisplayRestaurant from "./components/DisplayRestaurant/DisplayRestaurant";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/login">
                        <LoginFormPage />
                    </Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    <Route path="/restaurant">
                        <DisplayRestaurant />
                    </Route>
                    <Route path="/restaurants/:id">
                        <DisplayRestaurant />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
