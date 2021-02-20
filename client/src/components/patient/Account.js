import { Navigation } from "./Navigation";

export const PatientAccount = (props) => {
  return (
    <div>
      <Navigation />
      <div className="m-5 px-5">
        <div className="container my-5 form-container p-5">
          <form className="">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Phone</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Blood Group</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Allergies (if any)</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Comma separated allergies"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="eg. 1234 Main St"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" class="form-control" id="inputState" />
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <button type="submit" class="btn button-color">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
