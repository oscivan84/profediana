import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const MenuPanes = ({ options = {}, active, onClick = null }) => {
  return (
    <Nav className="nav-pills nav-primary mb-3">
      {Object.keys(options).map((opt, index) => 
        <NavItem key={`list-item-option-${index}`}>
          <NavLink  
            className={`${active == options[opt]?.key ? 'active' : ''} cursor-pointer`}
            onClick={(e) => typeof onClick == 'function' ? onClick(e, options[opt]) : null}
          >
            {options[opt]?.label}
          </NavLink>
      </NavItem>  
      )}
    </Nav>
  )
}

export default MenuPanes;