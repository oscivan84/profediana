import React from 'react';
import Select from 'react-select';

const SelectDefault = (props) => {

  const hero = (styles) => ({
    ...styles,
    padding: `0.3em 1em`,
    borderColor: "#efefef",
    zIndex: 99,
  });

  const colorStyles = {
    control: (styles) => props.basic ? styles : hero(styles)
  }

  return (
    <Select {...props}
      placeholder={props.placeholder || "Seleccionar..."}
      styles={colorStyles}
    />
  )
}

export default SelectDefault;