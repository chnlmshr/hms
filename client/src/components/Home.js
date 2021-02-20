import hospital from "../images/hospital.jpg";
import { Login } from "./Login";
import { Register } from "./Register";

export const Home = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HMS
          </a>
          <div>
            <Login />
            <Register />
          </div>
        </div>
      </nav>
      <div className="container my-lg-5 py-lg-5">
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-5">
            <h2 className="md-5">We are here to help</h2>
            <p className="mt-4 text-justify">
              Hamari website number one ab isse jyada nhi likh pa raha achha
              chalo thoda aur likh hi leta hun but ab jyada nhi likh paunga pata
              nhi kya likh raa hun random tokyo denver profesor oslo wagera
            </p>
            <p className="text-justify">
              ok baad me likh lunga bye bye achha chalo ek line aurda nhi likh
              pa raha achha chalo thoda aur likh hi leta hun but ab jyada nhi
              likh paunga pata nhi kya likh raa hun random tokyo denver profesor
              oslo wagera waera
            </p>
          </div>
          <div className="col-lg-2 col-sm-0"></div>
          <div className="col-sm-12 col-lg-6 mb-5">
            <img
              src={hospital}
              className="rounded mx-auto d-block img-fluid"
              alt="hospital"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
