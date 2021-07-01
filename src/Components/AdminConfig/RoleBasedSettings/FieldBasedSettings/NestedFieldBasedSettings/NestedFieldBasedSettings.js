import React from 'react';
import { Form } from 'react-bootstrap';
import './NestedFieldBasedSettings.css';

const NestedFieldBasedSettings = (props) => {
  return (
    <div className="root-NestedFieldBasedSettings">
      {Object.keys(props.settings).map((keyName) => {
        let keyArray = [...props.keyNameArray];
        keyArray.push(keyName);
        if (Object.keys(props.settings[keyName]).length === 0) {
          return (
            <Form.Check
              className="checkBox-div"
              type={'checkbox'}
              onChange={(e) => {
                props.toggleCheckBoxHandler(e, keyArray);
              }}
              id={keyName}
              label={keyName}
              defaultChecked={props.settings[keyName] === 1}
            />
          );
        } else {
          return (
            <div className="fieldName">
              <p>{keyName}</p>
              <NestedFieldBasedSettings
                keyNameArray={keyArray}
                toggleCheckBoxHandler={props.toggleCheckBoxHandler}
                settings={props.settings[keyName]}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default NestedFieldBasedSettings;
