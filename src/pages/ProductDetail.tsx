import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <section>
      <h1>The Product Detail Page {params.id}</h1>
    </section>
  );
};

export default ProductDetail;
