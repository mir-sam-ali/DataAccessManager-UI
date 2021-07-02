import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import rolesJSON from '../../AdminConfig/placeholder_data/roles.json';
import axios from 'axios';
import './RoleSelect.css';

const RoleSelect = (props) => {
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
    <Form className="RoleSelect">
      <div
        className="mb-3"
        onChange={(e) => {
          props.selectRoleHandler(e);
        }}
      >
        <h4>ROLE</h4>
        {roles.map((role) => (
          <Form.Check
            className="radio-RoleSelect"
            inline
            label={role.userRole}
            name={'role'}
            key={role.userRole}
            value={role.id}
            type="radio"
          />
        ))}
      </div>
    </Form>
  );
};

export default RoleSelect;
