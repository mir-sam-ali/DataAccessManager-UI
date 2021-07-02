import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import collectionJSON from '../../AdminConfig/placeholder_data/collections.json';
import './CollectionSelect.css';

const CollectionSelect = (props) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/getcollections`)
      .then((res) => {
        console.log(res);
        const collectionNames = res.data.filter(
          (name) => name !== 'Users' && name !== 'AccessRights'
        );
        setCollections(collectionNames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Form className="CollectionSelect">
      <div
        className="mb-3"
        onChange={(e) => {
          props.selectCollectionHandler(e);
        }}
      >
        <h4>COLLECTION</h4>
        {collections.map((collectionName) => (
          <Form.Check
            className="radio-CollectionSelect"
            inline
            label={collectionName}
            name={'collection'}
            key={collectionName}
            value={collectionName}
            type="radio"
          />
        ))}
      </div>
    </Form>
  );
};

export default CollectionSelect;
