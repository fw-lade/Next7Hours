"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const SingleProduct = () => {
  const {productId} = useParams()
  return (
    <div>
      <h1>Single Product Details</h1>
      <p>Product ID:{productId}</p>
    </div>
  )
}

export default SingleProduct