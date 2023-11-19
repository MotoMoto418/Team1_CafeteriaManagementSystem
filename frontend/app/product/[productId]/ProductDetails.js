"use client";

import Avatar from "@/app/components/Avatar";
import Button from "@/app/components/Button";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { MdCheckCircle } from "react-icons/md";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

export default function ProductDetails({ product }) {
  const { handleAddProduct, cartProducts } = useCart();

  console.log(cartProducts);

  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    img: product.image,
    quantity: 1,
    price: product.price,
  });

  const router = useRouter();

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const productRating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  const handleDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  const handleIncrease = useCallback(() => {
    if (cartProduct.quantity === 10) {
      //Change to be dynamic
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative aspect-square">
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        {isProductInCart ? (
          <>
            <p className="mb-2 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={20} />
              <span>Product added to cart!</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            <SetQuantity
              cartProduct={cartProduct}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Add to cart"
                onClick={() => handleAddProduct(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
