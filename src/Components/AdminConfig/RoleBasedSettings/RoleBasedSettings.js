import React, { useEffect, useState } from 'react';
import collectionNames from '../placeholder_data/collections.json';
import FieldBasedSettings from './FieldBasedSettings/FieldBasedSettings';
import { Tabs, Tab } from 'react-bootstrap';
import './RoleBasedSettings.css';

const RoleBasedSettings = (props) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('UseEffect', collectionNames.collections);
    setLoading(false);
    setCollections(collectionNames.collections);
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
            <Tab eventKey={collectionName} title={collectionName}>
              <FieldBasedSettings
                collectionName={collectionName}
                roleName={props.roleName}
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
