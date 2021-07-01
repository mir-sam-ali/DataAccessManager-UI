import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import configJson from '../../placeholder_data/config_data.json';
import './FieldBasedSettings.css';
import NestedFieldBasedSettings from './NestedFieldBasedSettings/NestedFieldBasedSettings';

const FieldBasedSettings = (props) => {
  const [collectionSettings, setCollectionSettings] = useState(null);

  useEffect(() => {
    var fieldAccessString = eval(
      '(' + configJson[`${props.roleName}`][`${props.collectionName}`] + ')'
    );
    var fieldAccessJSON = JSON.parse(JSON.stringify(fieldAccessString));
    console.log(fieldAccessJSON);

    setCollectionSettings(fieldAccessJSON);
  }, [props.collectionName, props.roleName]);
  return (
    <div className="checkBox-group-div">
      {collectionSettings ? (
        <>
          {Object.keys(collectionSettings).map((keyName) => {
            if (Object.keys(collectionSettings[keyName]).length === 0) {
              return (
                <Form.Check
                  className="checkBox-div"
                  type={'checkbox'}
                  id={keyName}
                  label={keyName}
                  key={keyName}
                  defaultChecked={collectionSettings[keyName] === 1}
                />
              );
            } else {
              return (
                <div className="fieldName">
                  <p>{keyName}</p>
                  <NestedFieldBasedSettings
                    settings={collectionSettings[keyName]}
                  />
                </div>
              );
            }
          })}
          <div className="button-div-FieldBasedSettings">
            <Button variant="primary" size="lg">
              Save Settings
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FieldBasedSettings;
