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

    if (data.patient) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "REGISTER_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", error: "Something went wrong" });
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
    if (data.patient) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    } else dispatch({ type: "LOGIN_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: "Something went wrong" });
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

    if (data.doctor) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    dispatch({ type: "REGISTER_ERROR", error: data.err });
    return;
  } catch (error) {
    console.log(error);
    dispatch({ type: "REGISTER_ERROR", error: "Something went wrong!" });
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

    if (data.doctor) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    } else dispatch({ type: "LOGIN_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: "Something went wrong" });
  }
}

export async function fetchPatient(dispatch, token) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "patient " + token,
    },
  };

  try {
    let response = await fetch(`${ROOT_URL}/api/patient`, requestOptions);
    let data = await response.json();
    if (data.patient) {
      dispatch({ type: "PATIENT_FETCH_SUCCESS", payload: data });
      return data.patient;
    } else { return {err: true} }
  } catch (error) {
    return {err: true}
  }
}

export async function fetchDoctor(dispatch, token) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "doctor " + token,
    },
  };

  try {
    let response = await fetch(`${ROOT_URL}/api/doctor`, requestOptions);
    let data = await response.json();

    if (data.doctor) {
      dispatch({ type: "DOCTOR_FETCH_SUCCESS", payload: data });
      return data.doctor;
    } else {return {err: true}}
    return;
  } catch (error) {
    return {err: true}
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}

export async function changePassword(dispatch, passwordPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(passwordPayload),
  };

  try {
    dispatch({ type: "REQUEST_CHANGE_PASSWORD" });
    let response = await fetch(
      `${ROOT_URL}/api/changepassword`,
      requestOptions
    );
    let data = await response.json();
    if (data.token) {
      dispatch({ type: "CHANGE_PASSWORD_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
    } else dispatch({ type: "CHANGE_PASSWORD_ERROR", error: data.err });
    return;
  } catch (error) {
    dispatch({ type: "CHANGE_PASSWORD_ERROR", error: "Something went wrong" });
  }
}
