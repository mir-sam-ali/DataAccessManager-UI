import React, { useState, useEffect } from 'react';
import { Tab, Col, Row, Navbar } from 'react-bootstrap';
import roles from './placeholder_data/roles.json';
import RoleBasedSettings from './RoleBasedSettings/RoleBasedSettings';
import './AdminConfig.css';
import axios from 'axios';
import SideBar from './SideBar/SideBar';
import { AiOutlineControl } from 'react-icons/ai';

const AdminConfig = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/getroles`)
      .then((res) => {
        console.log(res);
        setRoles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setRoles(rolesJSON.roles);
  }, []);
  return (
    <div className="root-AdminConfig">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{ fontSize: '1.8em' }}>
          <AiOutlineControl size="2em" style={{ marginRight: '2%' }} />
          Control Panel
        </Navbar.Brand>
      </Navbar>
      {roles.length !== 0 ? (
        <Tab.Container
          id="left-tabs-example"
          unmountOnExit
          style={{ height: '100%' }}
          defaultActiveKey={roles[0].userRole}
        >
          <Row style={{ height: '100%' }}>
            <Col sm={3} style={{ paddingRight: '0%' }}>
              <SideBar roles={roles} />
            </Col>
            <Col sm={9} style={{ paddingLeft: '0%' }}>
              <Tab.Content>
                {roles.map((role) => (
                  <Tab.Pane eventKey={role.userRole} key={role.userRole}>
                    <RoleBasedSettings role={role} />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : null}
    </div>
  );
};

export default AdminConfig;
