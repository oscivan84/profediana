import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const SelectDefault = (props) => {
  const animatedComponents = makeAnimated();

  const hero = (styles) => ({
    ...styles,
    padding: `0.5em 1em`,
    borderColor: "#efefef",
ui-landingpage-y-formulario-registro
    zIndex: 0,

    zIndex: 3

  });

  const colorStyles = {
    control: (styles) => props.basic ? styles : hero(styles)
  }

  return (
    <Select {...props}
    isClearable
    components={animatedComponents}
      placeholder={props.placeholder || "Seleccionar..."}
      styles={colorStyles}
    />
  )
}

export default SelectDefault;