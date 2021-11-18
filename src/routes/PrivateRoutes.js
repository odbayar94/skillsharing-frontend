import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // const token = Cookies.get("token");
    
      // if (!token) {
      //   // not logged in so redirect to login page with the return url
      //   return (
      //     <Redirect
      //       to={{
      //         pathname: "/authentication/login",
      //         state: { from: props.location },
      //       }}
      //     />
      //   );
      // }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
