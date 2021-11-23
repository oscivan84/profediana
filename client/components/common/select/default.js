import React from 'react';
import Select from 'react-select';

const SelectDefault = (props) => {

  const colorStyles = {
    control:  (styles) => ({
      ...styles, backgroundColor: 'rgba(0, 0, 0, 0.01)',
      padding: `0.3em 1em`,
      borderColor: "#efefef"
    })
  }

  return (
    <Select {...props}
      placeholder="Seleccionar..."
      styles={colorStyles}
    />
  )
}

export default SelectDefault;