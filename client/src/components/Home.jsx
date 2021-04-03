import illus3 from "../images/illus3.svg";

export const Home = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-background">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            HMS
          </a>
          <div>
            <a className="btn navbar-button" href="/login">
              Login
            </a>
            <a className="btn navbar-button ml-3" href="/register">
              Register
            </a>
          </div>
        </div>
      </nav>
      <div className="container my-5 py-md-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
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
          <div className="col-md-2 col-sm-0"></div>
          <div className="col-sm-12 col-md-6 mt-3 mt-md-0">
            <img
              src={illus3}
              className="mx-auto d-block img-fluid"
              alt="hospital"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
