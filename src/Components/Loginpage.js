import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [errorshow, seterrorshow] = useState(false);
  const [errorshow2, seterrorshow2] = useState(false);
  const [inputpassword, setinputpassword] = useState("");
  const password = "fattu";
  const onchangeevent = (e) => {
    setinputpassword(e.target.value);
    seterrorshow(true);
    if (e.target.value === password) {
      seterrorshow(true);
      seterrorshow2(false);
      return;
    }
    seterrorshow2(true);
    seterrorshow(false);
  };
  const navigate = useNavigate();
  const submitfunc = () => {
    if (inputpassword === password) {
      navigate("/college");
    } else {
      seterrorshow2(true);
    }
  };
  return (
    <react.Fragment>
      <div className="justify-content-center" id="loginpage">
        <div className="heading">
          <h1>
            <center>Best Friend's Guideness </center>
          </h1>

          <h3 className="mt-3 d-flex" id="loader">
            <div className="dot">f</div>
            <div className="dot">a</div>
            <div className="dot">a</div>
            <div className="dot">t</div>
            <div className="dot">t</div>
            <div className="dot">t</div>
            <div className="dot">u</div>
            <div className="dot">u</div>
          </h3>
        </div>

        <div className="form-group mt-5">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="text"
            className="form-control"
            id="bestiepassword"
            placeholder="Password"
            onChange={onchangeevent}
          />
        </div>
        {errorshow ? (
          <span id="errorlogin">
            okk let me think click toh abh uske baad boltoh
          </span>
        ) : (
          ""
        )}
        {errorshow2 ? (
          <span id="errorlogin2">
            kya fattu correct password type karoh naa thoda think hahah
          </span>
        ) : (
          ""
        )}

        <div className="justify-content-center d-flex">
          <button
            className="btn btn-warning mt-3"
            id="buttonsubmit"
            onClick={submitfunc}
          >
            Ready to enter inside?
          </button>
        </div>
      </div>
    </react.Fragment>
  );
};

export default Loginpage;
