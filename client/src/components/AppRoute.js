import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthState } from "../Context";

const AppRoute = ({ component: Component, path, type, ...rest }) => {
  const { doctor, patient, token } = useAuthState();
  if (Boolean(token)) {
    if (Boolean(patient) && type == "patient")
      return (
        <Route
          path={path}
          render={(props) => <Component {...props} />}
          {...rest}
        />
      );
    else if (Boolean(doctor) && type == "doctor")
      return (
        <Route
          path={path}
          render={(props) => <Component {...props} />}
          {...rest}
        />
      );
    else if (Boolean(patient))
      return (
        <Route
          path={path}
          render={() => <Redirect to="/patient" />}
          {...rest}
        />
      );
    else
      return (
        <Route
          path={path}
          render={(props) => <Redirect to="/doctor" />}
          {...rest}
        />
      );
  } else {
    if (type == "")
      return (
        <Route
          path={path}
          render={(props) => <Component {...props} />}
          {...rest}
        />
      );
    else
      return (
        <Route path={path} render={(props) => <Redirect to="/" />} {...rest} />
      );
  }
};

export default AppRoute;
