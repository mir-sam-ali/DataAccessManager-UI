import React from 'react';
import { Nav } from 'react-bootstrap';
import './SideBar.css';

const SideBar = (props) => {
  return (
    <Nav variant="pills" className="flex-column SideBar">
      {props.roles.map((role) => (
        <Nav.Item>
          <Nav.Link eventKey={role.userRole} key={role.userRole}>
            {role.userRole}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SideBar;
