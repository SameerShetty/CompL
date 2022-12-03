import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CgMenuRightAlt } from "react-icons/cg";
import Tdata from "./Tdata";

function Dashboard() {
  const [navToggle, setnavToggle] = useState(false);
  return (
    <div className="container-fluid ">
      <CgMenuRightAlt
        onClick={() => setnavToggle(!navToggle)}
        className="position-fixed top-0 end-0 m-2 d-block d-lg-none"
        style={{ fontSize: "1.5rem", cursor: "pointer" }}
      />
      <div className="row">
        <div
          className="text-bg-dark position-fixed col-2 py-3 d-lg-flex align-items-start justify-content-start flex-column d-none"
          style={{
            height: "100vh",
          }}
        >
          <div className="container-fluid flex-column d-flex align-items-start justify-content-center ">
            <HiOutlineUserCircle style={{ fontSize: "2rem" }} />
            <h5 className="my-1"> UserName</h5>
          </div>
          <div className="mt-5">
            {" "}
            <ul className="pt-4 px-1">
              <li className="p-2 "> Dashboard</li>
              <li className="p-2"> Components</li>
              <li className="p-2">Change Password</li>
              <li className="p-2">Logout</li>
            </ul>
          </div>
        </div>
        <div className="col-2 d-none d-lg-block"></div>

        <div className="col p-3">
          <h1 className="pb-3 mb-3"> Dashboard</h1>
          <div className="container-fluid d-flex flew-row align-items-center justify-content-around flex-wrap">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Component </th>
                  <th>Borrowed on</th>
                  <th>Returned on</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <Tdata />
                <Tdata />
                <Tdata />
                <Tdata />
                <Tdata />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
