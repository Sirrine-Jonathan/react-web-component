import React, { useState } from "react";
import useNameCountryOrigin from "../hooks/useNameCountryOrigin";
import useInstructions from "../hooks/useInstructions";
import useDebounce from "../hooks/useDebounce";
import PropTypes from "prop-types";
import "./WebComponent.scss";

const WebComponent = ({ first: propFirst, last: propLast }) => {
  const [first, setFirst] = useState(propFirst || "");
  const [last, setLast] = useState(propLast || "");
  const debouncedFullName = useDebounce(`${first}:${last}`, 1000);
  const [loading, error, nameCountryOrigin] =
    useNameCountryOrigin(debouncedFullName);
  const instructions = useInstructions(debouncedFullName);

  const handleChangeFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleChangeLast = (e) => {
    setLast(e.target.value);
  };

  let result = null;
  if (error) {
    console.error(error);
  } else if (loading) {
    result = "Please wait...";
  } else {
    result = nameCountryOrigin
      ? `Your name's country of origin is: ${nameCountryOrigin}`
      : null;
  }

  console.log("rerender");
  return (
    <div id="web-component">
      <h2>Enter your name to find your name's country of origin.</h2>
      <div>{instructions}</div>
      <div>
        <div>
          <input value={first} onChange={handleChangeFirst} />
        </div>
        <div>
          <input value={last} onChange={handleChangeLast} />
        </div>
      </div>
      <br />
      <div>{result}</div>
    </div>
  );
};

WebComponent.propTypes = {
  name: PropTypes.string,
};

export default WebComponent;
