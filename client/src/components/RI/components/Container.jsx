import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsContext from '../utils/RelatedProductsContext.jsx';

const id = 65631;

export default function Container() {
  const { setRelatedData } = useContext(RelatedProductsContext);

  function getRelatedProductInfo(relatedIDArr) {
    const result = [];
    relatedIDArr.forEach((relatedID) => {
      axios.get('/api', { params: { path: `products/${relatedID}` } })
        .then((response) => {
          result.push(response.data);
        })
        .catch((error) => {
          throw new Error(error);
        })
        .then(() => {
          setRelatedData(result);
        });
    });
  }

  function getRelatedProductIDs() {
    axios.get('/api', { params: { path: `products/${id}/related` } })
      .then((response) => {
        getRelatedProductInfo(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  useEffect(() => {
    getRelatedProductIDs();
  }, []);

  return (
    <div>Inside Container</div>
  );
}
