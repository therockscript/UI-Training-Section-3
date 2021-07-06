
import React from "react";  
import { useHistory } from "react-router-dom";

function PrivateRoute(props) {
    const history = useHistory();
    // You can check special cases you need from the token. And then act correspondingly
    // E.g. If user is admin and the "user" part of the app is prevented for admin.
    // Here the data should be read from your token/cookies.
    // Prior to this you should have code to check whether the token is valid or invalid.
    const accessToken = localStorage.getItem("todo_login_token");
    const isLoggedIn = accessToken ? true : false;

    if (!isLoggedIn) {
        history.push("/login");
        return null;
    } 
    return <div>
        {props.children}
    </div>
};

export default PrivateRoute;