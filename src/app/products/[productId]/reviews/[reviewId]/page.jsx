'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { notFound } from 'next/navigation'

const   ProductReview = () => {
  const { productId, reviewId } = useParams();

  if(parseInt(reviewId) > 100){
    notFound()
  }

  return (
    <div>
      Review {productId} for Product {reviewId}
    </div>
  );
};

export default ProductReview;
