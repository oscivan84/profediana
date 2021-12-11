import React from "react";

const Toogle = () => {
  return (
    <div>
      {/* <!-- Rectangular switch --> */}
      {/* <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label> */}

      {/* <!-- Rounded switch --> */}
      <label class="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toogle;
