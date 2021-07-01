import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import configJson from '../../placeholder_data/config_data.json';
import './FieldBasedSettings.css';
import NestedFieldBasedSettings from './NestedFieldBasedSettings/NestedFieldBasedSettings';
import _ from 'lodash';

const FieldBasedSettings = (props) => {
  const [collectionSettings, setCollectionSettings] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    var fieldAccessString = eval(
      '(' + configJson[`${props.roleName}`][`${props.collectionName}`] + ')'
    );
    var fieldAccessJSON = JSON.parse(JSON.stringify(fieldAccessString));
    console.log(fieldAccessJSON);

    setCollectionSettings(fieldAccessJSON);
  }, [props.collectionName, props.roleName]);

  const toggleCheckBox = (e, keysArray) => {
    //console.log(e.target.checked);

    let newSettings = { ...collectionSettings };

    _.set(newSettings, keysArray, e.target.checked ? 1 : 0);
    //console.log(newSettings);
    setCollectionSettings(newSettings);
  };

  const saveSettingsHandler = () => {
    let jsonString = JSON.stringify(collectionSettings);
    jsonString = jsonString.replace(/['"]+/g, '');
    console.log(jsonString);
  };

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
                  onChange={(e) => {
                    toggleCheckBox(e, new Array(`${keyName}`));
                  }}
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
                    keyNameArray={new Array(`${keyName}`)}
                    toggleCheckBoxHandler={toggleCheckBox}
                    settings={collectionSettings[keyName]}
                  />
                </div>
              );
            }
          })}
          <div className="button-div-FieldBasedSettings">
            <Button variant="primary" size="lg" onClick={saveSettingsHandler}>
              Save Settings
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default FieldBasedSettings;
