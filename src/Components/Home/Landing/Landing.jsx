// import React from "react";
import SCH from "./../../../assets/SCH.gif"


const Landing = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={SCH}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              SAM'S SCHOOL PORTAL
            </h1>
            <p className="lead">
            Welcome to the SAM'S SCHOOL Portal, your one-stop destination for all academic and administrative needs. Whether you're a student, parent, or faculty member, our portal is designed to simplify your school experience, offering easy access to resources, communication tools, and important updates.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button" style={{backgroundColor:"purple", color:"white", border:"none"}}
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Get Started
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
