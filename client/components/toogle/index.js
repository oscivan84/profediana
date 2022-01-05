import React from "react";

const Toogle = ({defaultChecked}) => {
  return (
    <div>
      {/* <!-- Rectangular switch --> */}
      {/* <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label> */}

      {/* <!-- Rounded switch --> */}
      <label className="switch">
        <input type="checkbox" defaultChecked={defaultChecked}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toogle;
