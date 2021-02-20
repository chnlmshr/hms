const ROOT_URL = "http://localhost:9999";

export async function registerPatient(dispatch, registerPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerPayload),
  };

  try {
    dispatch({ type: "REQUEST_REGISTER" });
    let response = await fetch(
      `${ROOT_URL}/api/registerPatient`,
      requestOptions
    );
    let data = await response.json();

    if (data.user) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "REGISTER_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", error: error });
  }
}

export async function loginPatient(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${ROOT_URL}/api/loginPatient`, requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    } else dispatch({ type: "LOGIN_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function registerDoctor(dispatch, registerPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerPayload),
  };

  try {
    dispatch({ type: "REQUEST_REGISTER" });
    let response = await fetch(
      `${ROOT_URL}/api/registerDoctor`,
      requestOptions
    );
    let data = await response.json();

    if (data.user) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "REGISTER_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", error: error });
  }
}

export async function loginDoctor(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetch(`${ROOT_URL}/api/loginDoctor`, requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    } else dispatch({ type: "LOGIN_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
