import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    usern: "",
    pswd: "",
  });

  const handlechange = (e) => {
    const value = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };
  function handleclick(event) {
    event.preventDefault();
    const userdata = {
      username: user.usern,
      password: user.pswd,
    };
    // axios
    //   .post("/userfeed", userfeedb)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // setdone(true);
  }
  return (
    <div>
      {/* data-bs-toggle="modal" data-bs-target="#exampleModal" */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">No Such user exist</div>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-start align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card p-auto shadow p-3 mb-5 bg-body rounded container-md mt-2">
          <div className="card-body">
            <h5 class="card-title my-4 text-center">Login</h5>{" "}
            <div className="form-floating my-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                name="usern"
                placeholder="Enter your USN"
                value={user.usern}
                onChange={handlechange}
              />
              <label for="floatingInput ">Username</label>
            </div>
            <div className="form-floating my-4">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="pswd"
                value={user.pswd}
                onChange={handlechange}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button className="btn btn-dark ">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
