import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { HiOutlineDatabase } from 'react-icons/hi';
import ReactJson from 'react-json-view';

import CollectionSelect from './CollectionSelect/CollectionSelect';
import './DataAccess.css';
import RoleSelect from './RoleSelect/RoleSelect';
import axios from 'axios';

const DataAccess = () => {
  const [role, setRole] = useState(null);
  const [collection, setCollection] = useState(null);
  const [jsonContent, setJsonContent] = useState({});

  const selectRoleHandler = (e) => {
    console.log(e.target.value);
    setRole(e.target.value);
  };

  const selectCollectionHandler = (e) => {
    console.log(e.target.value);
    setCollection(e.target.value);
  };

  const getRequestHandler = () => {
    if (role && collection) {
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
        setJsonContent(res);
      });
    } else {
      window.alert('Select role and collection');
    }
  };

  return (
    <div className="root-DataAccess">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{ fontSize: '1.8em' }}>
          <HiOutlineDatabase
            color="white"
            size="2em"
            style={{ marginRight: '2%' }}
          />
          Data Security Testing
        </Navbar.Brand>
      </Navbar>
      <div>
        <RoleSelect selectRoleHandler={selectRoleHandler} />
      </div>
      <div>
        <CollectionSelect selectCollectionHandler={selectCollectionHandler} />
      </div>

      <div className="button-div-DataAccess">
        <Button variant="success" size="lg" onClick={getRequestHandler}>
          GET Request
        </Button>
      </div>
      <ReactJson
        src={jsonContent}
        theme="summerfruit"
        style={{ textAlign: 'start', margin: '3% 1%', padding: '1%' }}
      />
    </div>
  );
};

export default DataAccess;
