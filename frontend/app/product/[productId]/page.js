import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/Products";

export default function Product({ params }) {
    const product = products.find((item) => item.id === params.productId)

  return <div className="p-8">
    <Container>
        <ProductDetails product={product} />
    </Container>
  </div>;
}
