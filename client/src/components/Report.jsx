import { Navigation } from "./Navigation";
import smallLogo from "../images/hospital.jpg";
const Report = (props) => {
  return (
    <div>
      {/* <Navigation homelink="patient" />
      <div className="container">
        <div className="row m-5">
          <div className="offset-md-2 col-md-8 report p-5">
            <div className="row">
              <div className="col-5 hospitalname display-3">HMS</div>
              <div className="col-5 offset-2">
                <div className="row">
                  <div className="col-12 createdon">Date Created: DD-MM-YY</div>
                </div>
                <div className="row">
                  <div className="col-12 lastmodified">
                    Last Modified: DD-MM-YY
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6 name">Mrs. Someone something someone</div>
              <div className="col-3 age">Age: 100</div>
              <div className="col-3 sex">Female</div>
            </div>
            <div className="row">
              <div className="col-6 bloodgroup">Blood Group: AB+</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-light bg-eee">
                  <div className="pr-5 pt-3 h3">Welcome!</div>
                  <img
                    src={smallLogo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top ml-5 mt-3"
                    alt=""
                  />
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div class="text-center">
                  <button className="m-2">hello</button>
                  <button className="m-2">bruh</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
