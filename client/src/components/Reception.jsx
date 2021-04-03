import { useState } from "react";
import { reception, useAuthDispatch, useAuthState } from "../Context";
import { Navigation } from "./Navigation";

export const Reception = (props) => {
  const name = JSON.parse(localStorage.getItem("currentUser")).name;
  const email = JSON.parse(localStorage.getItem("currentUser")).email;
  const phone = JSON.parse(localStorage.getItem("currentUser")).phone;
  const age = JSON.parse(localStorage.getItem("currentUser")).age;
  const allergies = JSON.parse(localStorage.getItem("currentUser")).allergies;
  const { loading, token } = useAuthState(),
    dispatch = useAuthDispatch(),
    initialState = {
      name: name,
      phone: phone,
      email: email,
      age: age,
      allergies: allergies,
      complications: "",
      errorMessage: "",
      department: "Department",
    },
    [state, setState] = useState(initialState);

  const handleOnChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      errorMessage: "",
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await reception(dispatch, {
        ...state,
        token: "patient " + token,
      });
      if (res.success) props.history.push("/chooseDoctor");
      else setState({ ...initialState, errorMessage: "Something went wrong!" });
    } catch (error) {
      setState({ ...initialState, errorMessage: "Something went wrong!" });
    }
  };

  return (
    <div>
      <Navigation homelink="/patient" active="reception"/>
      <div className="container">
        <div className="row my-5 py-md-5">
          <div className="offset-md-2 col-md-8">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Reception
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <form className="p-3" onSubmit={handleOnSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={state.name}
                          disabled
                        />
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
                          type="number"
                          className="form-control"
                          name="age"
                          value={state.age}
                          onChange={handleOnChange}
                          placeholder="Age"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="allergies"
                          value={state.allergies}
                          onChange={handleOnChange}
                          placeholder="Allergies"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <select
                          name="department"
                          className="custom-select"
                          value={state.value}
                          onChange={handleOnChange}
                        >
                          <option value="Department">Department</option>
                          <option value="Dentist">Dentist</option>
                          <option value="ENT">ENT(Ear Nose Throat)</option>
                          <option value="Gynecology">
                            Gynecology(Female eproductive System)
                          </option>
                          <option value="Cardiology">Cardiology(Heart)</option>
                          <option value="Pulmonology">
                            Pulmonology(Lungs)
                          </option>
                          <option value="Neprology">Neprology(Kidney)</option>
                          <option value="Neurology">
                            Neurology(Nervous System)
                          </option>
                          <option value="Oncology">Oncology(Cancer)</option>
                          <option value="Orthopaedics">
                            Orthopaedics(Bones)
                          </option>
                          <option value="Dermatology">Dermatology(Skin)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="complications"
                          aria-describedby="error"
                          value={state.complications}
                          onChange={handleOnChange}
                          placeholder="Complication Description"
                        />
                        <small id="error" className="form-text">
                          {state.errorMessage}
                        </small>
                      </div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Choose Doctor
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
