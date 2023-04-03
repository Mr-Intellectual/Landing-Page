import React from "react";
import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    //Some html code should go here
      <div className="col card  h-100">
        <img src={props.url} className="card-img-top" alt="Loading Picture..." />
        <div className="card-body h-50">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.children}</p>
        </div>
        <div className="card-body">
          <a href="#" className="btn btn-primary ">
            {props.a}
          </a>
        </div>
      </div>
  );
}


Card.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string,
  title:PropTypes.string,
  a:PropTypes.string
};

Card.defaultProps={
  url: "Hello",
  children: "Text goes here.",
  title:"Card Title",
  a: "Find Out More !"
}