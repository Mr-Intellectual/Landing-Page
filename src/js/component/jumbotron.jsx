import React from "react";
import PropTypes from 'prop-types';


export default function Jumbotron(props) {
  return (
    //Some html code should go here
    <div className="px-3 pb-5 my-4 bg-light rounded-3 ">
      <div className="pb-3">
        <div className="container-fluid pb-5 pt-1">
        <h1 className="display-5 fw-bold mb-3" id="title">{props.title}</h1>
        <p className="col-md-12 fs-4 mx-auto my-4">
          {props.children}
        </p>
        <button className="btn btn-primary btn-lg float-start" type="button">
          {props.button}
        </button>
      </div>
      </div>
    </div>
  );
}


Jumbotron.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  button: PropTypes.string
};

Jumbotron.defaultProps={
  title: "Welcome to my Landing Page!",
  children: `Using a series of utilities, you can create this jumbotron, just like
  the one in previous versions of Bootstrap. Check out the examples
  below for how you can remix and restyle it to your liking.`,
  button: "Call to action!"
}