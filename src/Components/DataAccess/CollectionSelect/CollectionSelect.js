import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import collectionJSON from '../../AdminConfig/placeholder_data/collections.json';
import './CollectionSelect.css';

const CollectionSelect = (props) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(collectionJSON.collections);
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
