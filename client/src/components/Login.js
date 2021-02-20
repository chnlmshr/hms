import { useState } from "react";

const Doctor = (props) => {
  const initialState = {
    email: "",
    password: "",
    error: "",
  };
  const [state, setState] = useState(initialState);

  const handleOnChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setState(initialState);
  };

  return (
    <form className="p-3" onSubmit={handleOnSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          value={state.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          aria-describedby="error"
          min={6}
          value={state.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
        <small id="error" className="form-text text-muted">
          {state.error}
        </small>
      </div>
      <button type="submit" className="btn btn-primary float-right">
        Login
      </button>
    </form>
  );
};

const Patient = (props) => {
  const initialState = {
    name: "",
    email: "",
    error: "",
    password: "",
    age: "",
    sex: "",
  };
  const [state, setState] = useState(initialState);

  const handleOnChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setState(initialState);
  };

  return (
    <form className="p-3" onSubmit={handleOnSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          value={state.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          aria-describedby="error"
          minLength={6}
          value={state.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
        <small id="error" className="form-text text-muted">
          {state.error}
        </small>
      </div>
      <button type="submit" className="btn btn-primary float-right">
        Login
      </button>
    </form>
  );
};

export const Login = (props) => {
  return (
    <div className="navBarButtoon">
      <button
        type="button"
        className="btn btn-outline-success"
        data-toggle="modal"
        data-target="#loginModal"
      >
        Login
      </button>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="loginModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs" id="loginTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="doctorlogin-tab"
                    data-toggle="tab"
                    href="#doctorlogin"
                    role="tab"
                    aria-controls="doctorlogin"
                    aria-selected="true"
                  >
                    Doctor
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="patientlogin-tab"
                    data-toggle="tab"
                    href="#patientlogin"
                    role="tab"
                    aria-controls="patientlogin"
                    aria-selected="false"
                  >
                    Patient
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="loginTabContent">
                <div
                  className="tab-pane fade show active"
                  id="doctorlogin"
                  role="tabpanel"
                  aria-labelledby="doctorlogin-tab"
                >
                  <Doctor />
                </div>
                <div
                  className="tab-pane fade"
                  id="patientlogin"
                  role="tabpanel"
                  aria-labelledby="patientlogin-tab"
                >
                  <Patient />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
