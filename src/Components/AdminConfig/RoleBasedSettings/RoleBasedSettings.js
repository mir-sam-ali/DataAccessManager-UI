import React, { useEffect, useState } from 'react';
import collectionNames from '../placeholder_data/collections.json';
import FieldBasedSettings from './FieldBasedSettings/FieldBasedSettings';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import './RoleBasedSettings.css';

const RoleBasedSettings = (props) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/getcollections`)
      .then((res) => {
        console.log(res);
        const collectionNames = res.data.filter(
          (name) => name !== 'Users' && name !== 'AccessRights'
        );
        setCollections(collectionNames);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="RoleBasedSettings">
      {loading ? (
        <div>Loading</div>
      ) : collections.length !== 0 ? (
        <Tabs
          defaultActiveKey={collections[0]}
          unmountOnExit
          id="uncontrolled-tab-example"
        >
          {collections.map((collectionName) => (
            <Tab
              eventKey={collectionName}
              title={collectionName}
              key={collectionName}
            >
              <FieldBasedSettings
                collectionName={collectionName}
                role={props.role}
              />
            </Tab>
          ))}
        </Tabs>
      ) : (
        <h1>No Collections Available</h1>
      )}
    </div>
  );
};

export default RoleBasedSettings;
