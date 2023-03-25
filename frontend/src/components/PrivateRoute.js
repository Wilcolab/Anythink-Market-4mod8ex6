import React from "react"
import { Route } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ currentUser: { isAuthenticated: state.common.currentUser != null } });

function Message() {
    return <div><h1>This is a private page</h1></div>
}

function PrivateRoute({ currentUser, component, ...rest }) {
    return <Route {...rest} component={currentUser.isAuthenticated ? component : Message} />;
}

export default connect(mapStateToProps)(PrivateRoute);
