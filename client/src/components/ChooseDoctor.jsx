import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useAuthDispatch, useAuthState } from "../Context";
import { chooseDoctor, visit } from "../Context/actions";
import { Navigation } from "./Navigation";

const DoctorCard = (props) => {
  const dispatch = useAuthDispatch(),
    { token, loading } = useAuthState();
  const onClickHandler = () => {
    let data = visit(dispatch, { token: token, id: props.id });
    data = { success: true };
    if (data && data.success) props.PROPS.history.push("/visit");
  };
  return (
    <div className="row mt-3 p-3 choose-doc-card">
      <div className="col-4">
        <div className="doc-name">{props.name}</div>
      </div>
      <div className="col-4">
        <div className="doc-degree">{props.degree}</div>
        <div className="doc-speciality">{props.speciality}</div>
      </div>
      <div className="col-2 offset-2">
        <button
          className="btn btn-primary"
          onClick={onClickHandler}
          disabled={loading}
        >
          Visit
        </button>
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
    data = {
      success: true,
      foundspeciality: true,
      doctors: [
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
        {
          name: "Dr. Someone",
          degree: "MBBS",
          speciality: "Ear Nose Throat(ENT)",
          _id: "fuefhf3273738ye3ye7732h7387",
        },
      ],
    };
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
                  key={doctor}
                  name={doctor.name}
                  degree={doctor.degree}
                  speciality={doctor.speciality}
                  id={doctor._id}
                  PROPS={props}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChooseDoctor;
