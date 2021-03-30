const Report = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row m-5">
          <div className="offset-md-2 col-md-8 report">
            <div className="row">
              <div className="col-6 hospitalname">HMS</div>
              <div className="col-4 offset-2">
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
      </div>
    </div>
  );
};

export default Report;
