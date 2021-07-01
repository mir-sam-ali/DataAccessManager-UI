import React from 'react';
import { Nav } from 'react-bootstrap';
import './SideBar.css';

const SideBar = (props) => {
  return (
    <Nav variant="pills" className="flex-column SideBar">
      {props.roles.map((roleName) => (
        <Nav.Item>
          <Nav.Link eventKey={roleName} key={roleName}>
            {roleName}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SideBar;
