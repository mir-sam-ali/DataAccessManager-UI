import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import rolesJSON from '../../AdminConfig/placeholder_data/roles.json';
import './RoleSelect.css';

const RoleSelect = (props) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    setRoles(rolesJSON.roles);
  }, []);
  return (
    <Form className="RoleSelect">
      <div
        className="mb-3"
        onChange={(e) => {
          props.selectRoleHandler(e);
        }}
      >
        <h4>ROLE</h4>
        {roles.map((roleName) => (
          <Form.Check
            className="radio-RoleSelect"
            inline
            label={roleName}
            name={'role'}
            key={roleName}
            value={roleName}
            type="radio"
          />
        ))}
      </div>
    </Form>
  );
};

export default RoleSelect;
