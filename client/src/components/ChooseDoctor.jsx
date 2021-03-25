import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useAuthDispatch, useAuthState } from "../Context";
import { chooseDoctor } from "../Context/actions";
import { Navigation } from "./Navigation";

const DoctorCard = ({ name, degree, speciality }) => {
  return (
    <div className="row mt-3 p-3 choose-doc-card">
      <div className="col-4">
        <div className="doc-name">{name}</div>
      </div>
      <div className="col-4">
        <div className="doc-degree">{degree}</div>
        <div className="doc-speciality">{speciality}</div>
      </div>
      <div className="col-2 offset-2">
        <a href="#" className="btn btn-primary">
          Visit
        </a>
      </div>
    </div>
  );
};

const ChooseDoctor = (props) => {
  const [state, setState] = useState({
      success: "loading",
      foundspeciality: "",
      doctors: [],
    }),
    dispatch = useAuthDispatch(),
    { token, loading } = useAuthState();

  useEffect(async () => {
    let data = await chooseDoctor(dispatch, token);
    // data = {
    //   success: true,
    //   foundspeciality: true,
    //   doctors: [
    //     {
    //       name: "Dr. Someone",
    //       degree: "MBBS",
    //       speciality: "Ear Nose Throat(ENT)",
    //     },
    //     {
    //       name: "Dr. Someone",
    //       degree: "MBBS",
    //       speciality: "Ear Nose Throat(ENT)",
    //     },
    //     {
    //       name: "Dr. Someone",
    //       degree: "MBBS",
    //       speciality: "Ear Nose Throat(ENT)",
    //     },
    //   ],
    // };
    if (data.success) {
      if (data.foundspeciality) {
        setState({
          success: true,
          foundspeciality: true,
          doctors: data.doctors,
        });
      } else {
        setState({ ...state, success: true, foundspeciality: false });
      }
    } else {
      setState({ ...state, success: false });
    }
  }, []);

  if (state.success === "loading" || loading) return <div>Loading...</div>;
  else if (!state.success)
    return <div>Some Error occurred... Please reload</div>;
  else if (!state.foundspeciality) return <Redirect to="/reception" />;
  else
    return (
      <div>
        <Navigation homelink="/patient" />
        <div className="container">
          <div className="row m-3">
            <div className="col-md-8 offset-md-2">
              {state.doctors.map((doctor) => (
                <DoctorCard
                  name={doctor.name}
                  degree={doctor.degree}
                  speciality={doctor.speciality}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChooseDoctor;
