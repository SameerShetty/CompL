import React, { useState, useEffect } from "react";
var d = new Date().getFullYear();
function Card() {
  const [feed, setfeed] = useState([
    {
      cname: "",
      stock: "",
    },
  ]);
  useEffect(() => {
    fetch("/componentdata")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setfeed(jsonRes));
  });
  const [stock, setstock] = useState(0);
  const [modal, setmodal] = useState({});

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {modal.act}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul>
                <li>{modal.name}</li>
                <li>On {modal.dt}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark mx-auto"
                style={{ width: "90%" }}
                data-bs-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      {feed.map((item) => (
        <div
          className="card shadow p-3 mb-5 bg-body rounded"
          style={{ width: "18rem" }}
          key={item.id}
        >
          <img
            src="../imgs/Arduino_uno.png"
            className="card-img-top"
            alt="component-img"
          />
          <div className="card-body">
            <h5 className="card-title">{item.cname}</h5>
            <p className="card-text">
              Component uses : Note that the development build is not optimized.
              To create a production build, use npm run build.
            </p>
            <h4> Available : {item.stock}</h4>{" "}
            <div className="row">
              {" "}
              <button
                className="btn btn-light p-2 m-1 col"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => {
                  setmodal({
                    act: "Borrowing",
                    name: "Component name",
                    dt: d,
                  });
                }}
              >
                Borrow
              </button>
              <button
                className="btn btn-dark p-2 m-1  col"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => {
                  setmodal({
                    act: "Returning",
                    name: "Component name",
                    dt: d,
                  });
                }}
              >
                Return
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
