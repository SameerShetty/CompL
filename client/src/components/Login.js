import React from "react";

function Login() {
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
                placeholder="Enter your USN"
              />
              <label for="floatingInput ">Username</label>
            </div>
            <div className="form-floating my-4">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
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
