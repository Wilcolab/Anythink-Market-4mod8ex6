import React from "react"
import { Route, Redirect } from "react-router-dom";

function Redirector() {
    return <Redirect to={{ pathname: "/login" }} />
}

export default function PrivateRoute({ currentUser, component, ...rest }) {
    return <Route {...rest} component={currentUser ? component : Redirector} />;
}
