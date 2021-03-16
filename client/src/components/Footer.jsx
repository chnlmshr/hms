export const Footer = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid mb-0 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h4 className="display-4">HMS</h4>
            <p>
              Hamari website number one ab isse jyada nhi likh pa raha ok baad
              me likh lunga bye bye achha chalo ek line aur
            </p>
          </div>
          <div className="col-lg-4 col-12 offset-lg-2">
            <h6 className="ml-3">Follow Us on</h6>
            <ul>
              <li>
                <a href="#" className="footerlink">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footerlink">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="footerlink">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="footerlink">
                  linkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
