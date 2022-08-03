import React, { useEffect } from 'react'
import ProductDetails from './ProductDetails'
import ProductHeroWeb from "./ProductHeroWeb"
const ProductWeb = (props) => {
  // =========================== scroll To Top default =========================
  useEffect(() => {
    props.demo('top')
  }, [])
  // =========================== scroll To Top default =========================
  return (
    <>
      <ProductHeroWeb />
      <ProductDetails />
    </>
  )
}

export default ProductWeb