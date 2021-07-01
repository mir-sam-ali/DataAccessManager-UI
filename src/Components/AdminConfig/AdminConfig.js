import React from 'react';
import { Tab, Col, Row, Navbar } from 'react-bootstrap';
import roles from './placeholder_data/roles.json';
import RoleBasedSettings from './RoleBasedSettings/RoleBasedSettings';
import './AdminConfig.css';
import SideBar from './SideBar/SideBar';
import { AiOutlineControl } from 'react-icons/ai';

const AdminConfig = () => {
  return (
    <div className="root-AdminConfig">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{ fontSize: '1.8em' }}>
          <AiOutlineControl size="2em" style={{ marginRight: '2%' }} />
          Control Panel
        </Navbar.Brand>
      </Navbar>

      <Tab.Container
        id="left-tabs-example"
        unmountOnExit
        style={{ height: '100%' }}
        defaultActiveKey={roles.roles[0]}
      >
        <Row style={{ height: '100%' }}>
          <Col sm={3} style={{ paddingRight: '0%' }}>
            <SideBar roles={roles.roles} />
          </Col>
          <Col sm={9} style={{ paddingLeft: '0%' }}>
            <Tab.Content>
              {roles.roles.map((roleName) => (
                <Tab.Pane eventKey={roleName} key={roleName}>
                  <RoleBasedSettings roleName={roleName} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AdminConfig;
