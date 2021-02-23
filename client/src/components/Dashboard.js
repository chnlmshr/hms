import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  fetchDoctor,
  fetchPatient,
  useAuthDispatch,
  useAuthState,
  logout,
} from "../Context";

export const PatientDashboard = (props) => {
  const { token } = useAuthState(),
    dispatch = useAuthDispatch(),
    [state, setState] = useState({ name: "" });

  useEffect(async () => {
    const data = await fetchPatient(dispatch, token);
    if (data.err) logout(dispatch);
    else setState({ ...data });
  }, []);

  return (
    <div>
      <Navigation homelink="/patient" username={state.name} />
      <div className="container">
        <div className="row m-3">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DoctorDashboard = (props) => {
  const { token } = useAuthState(),
    dispatch = useAuthDispatch(),
    [state, setState] = useState({ name: "" });

  useEffect(async () => {
    const data = await fetchDoctor(dispatch, token);
    if (data.err) logout(dispatch);
    else setState({ ...data });
  }, []);
  return (
    <div>
      <Navigation homelink="/doctor" username={state.name} />
      <div className="container">
        <div className="row m-3">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
