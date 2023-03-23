import React from "react"
import { Route } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ authenticated: state.common.currentUser != null });

function Message() {
    return <div><h1>This is a private page</h1></div>
}

class PrivateRoute extends React.Component {
    render() {
        const { authenticated, component, ...rest } = this.props;
        return <Route {...rest} component={authenticated ? component : Message} />;
    }
}

export default connect(mapStateToProps)(PrivateRoute);
