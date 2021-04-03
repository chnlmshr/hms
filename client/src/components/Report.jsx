import { useEffect, useState } from "react";
import { useAuthDispatch, useAuthState } from "../Context";
import { report } from "../Context/actions";
import { Navigation } from "./Navigation";
const Report = (props) => {
  const initialState = {
    dateCreated: "",
    lastModified: "",
    name: "",
    age: "",
    sex: "",
    blood_group: "",
    consultant: "",
    complications: "",
    consultantWord: "",
    allergies: "",
    medicines: "",
  };
  const dispatch = useAuthDispatch(),
    { token } = useAuthState();
  const [state, setState] = useState(initialState);
  useEffect(async () => {
    const data = await report(dispatch, token);
    if (data && data.success) {
      setState(data);
    }
  }, []);
  return (
    <div>
      <Navigation homelink="patient" active="report"/>
      <div className="container">
        <div className="row m-2 m-md-5">
          <div className="offset-md-2 col-md-8 report p-5">
            <div className="row">
              <div className="col-md-5 hospitalname display-3">HMS</div>
              <div className="col-md-5 offset-md-2">
                <div className="row mt-3">
                  <div className="col-12 createdon">
                    Date Created: {state.dateCreated}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 lastmodified">
                    Last Modified: {state.lastModified}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row mt-3">
              <div className="col-6 name">{state.name}</div>
              <div className="col-3 age">Age: {state.age}</div>
              <div className="col-3 sex">{state.sex}</div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <strong>Blood Group:</strong> {state.blood_group}
              </div>
              <div className="col-6">
                <strong>Consultant:</strong> {state.consultant}
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-justify mt-4">
                <strong>Complications: </strong> {state.complications}
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-justify mt-4">
                <strong>Consultats's Word: </strong> {state.consultantWord}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <strong>Allergies:</strong> {state.allergies}
              </div>
              <div className="col-6">
                <strong>Medicines:</strong> {state.medicines}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
