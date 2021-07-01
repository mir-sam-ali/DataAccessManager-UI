import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import configJson from '../../placeholder_data/config_data.json';
import './FieldBasedSettings.css';

const FieldBasedSettings = (props) => {
  const [collectionSettings, setCollectionSettings] = useState(null);

  useEffect(() => {
    const fieldAccessValues =
      configJson[`${props.roleName}`][`${props.collectionName}`];
    setCollectionSettings(
      Object.keys(fieldAccessValues).map((keyName) => ({
        fieldName: keyName,
        access: fieldAccessValues[`${keyName}`],
      }))
    );
  }, [props.collectionName, props.roleName]);
  return (
    <div className="checkBox-group-div">
      {collectionSettings ? (
        <>
          {collectionSettings.map((fieldSetting) => (
            <Form.Check
              className="checkBox-div"
              type={'checkbox'}
              id={fieldSetting.fieldName}
              label={fieldSetting.fieldName}
              defaultChecked={fieldSetting.access}
            />
          ))}
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
