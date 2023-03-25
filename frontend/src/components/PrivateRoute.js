import React from "react"
import { Route } from "react-router-dom";

function Message() {
    return <div><h1>This is a private page</h1></div>
}

export default function PrivateRoute({ currentUser, component, ...rest }) {
    return <Route {...rest} component={currentUser.isAuthenticated ? component : Message} />;
}
