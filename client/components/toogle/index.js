import React, { useEffect, useState } from "react";

const Toogle = ({defaultChecked, onChange = () => {}, ...props}) => {
  const [ state, setState ] = useState( defaultChecked );
  const toggle = () => {
    setState( !state )
    onChange( !state )
  }
  return (
    <div>
      {/* <!-- Rectangular switch --> */}
      {/* <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label> */}

      {/* <!-- Rounded switch --> */}
      <label className="switch">
        <input type="checkbox" defaultChecked={defaultChecked} onChange={ toggle } />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toogle;
