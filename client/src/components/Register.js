import { useState } from "react";

const Doctor = (props) => {
  const initialState = {
    name: "",
    email: "",
    error: "",
    phone: "",
    password: "",
    confirmPassword: "",
    degree: "",
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
          type="text"
          className="form-control"
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          aria-describedby="error"
          name="email"
          value={state.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
        <small id="error" className="form-text text-muted">
          {state.error}
        </small>
      </div>
      <div className="form-group">
        <input
          type="phone"
          className="form-control"
          name="phone"
          value={state.phone}
          onChange={handleOnChange}
          placeholder="Phone"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          minLength={6}
          value={state.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          minLength={6}
          value={state.confirmPassword}
          onChange={handleOnChange}
          placeholder="Confirm Password"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="degree"
          value={state.degree}
          onChange={handleOnChange}
          placeholder="Degree"
        />
      </div>
      <button type="submit" className="btn btn-primary float-right">
        Register
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
    confirmPassword: "",
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
          type="text"
          className="form-control"
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          aria-describedby="error"
          name="email"
          value={state.email}
          onChange={handleOnChange}
          placeholder="Email"
        />
        <small id="error" className="form-text text-muted">
          {state.error}
        </small>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          minLength={6}
          value={state.password}
          onChange={handleOnChange}
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          minLength={6}
          value={state.confirmPassword}
          onChange={handleOnChange}
          placeholder="Confirm Password"
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          name="age"
          max={120}
          value={state.age}
          onChange={handleOnChange}
          placeholder="Age"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="sex"
          value={state.sex}
          onChange={handleOnChange}
          placeholder="Sex"
        />
      </div>
      <button type="submit" className="btn btn-primary float-right">
        Register
      </button>
    </form>
  );
};

export const Register = (props) => {
  return (
    <div className="navBarButtoon ml-3">
      <button
        type="button"
        className="btn btn-outline-success"
        data-toggle="modal"
        data-target="#registerModal"
      >
        Register
      </button>
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registerModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
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
              <ul className="nav nav-tabs" id="registerTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="doctor-tab"
                    data-toggle="tab"
                    href="#doctor"
                    role="tab"
                    aria-controls="doctor"
                    aria-selected="true"
                  >
                    Doctor
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="patient-tab"
                    data-toggle="tab"
                    href="#patient"
                    role="tab"
                    aria-controls="patient"
                    aria-selected="false"
                  >
                    Patient
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="registerTabContent">
                <div
                  className="tab-pane fade show active"
                  id="doctor"
                  role="tabpanel"
                  aria-labelledby="doctor-tab"
                >
                  <Doctor />
                </div>
                <div
                  className="tab-pane fade"
                  id="patient"
                  role="tabpanel"
                  aria-labelledby="patient-tab"
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
