"use client";

import React from "react";
import Image from "next/image";

import logo from "/assets/logo_dish.png";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ProductCard({ data }) {
  const router = useRouter();

  //   const productRating =
  //     data.reviews.reduce((acc, item) => item.rating + acc, 0) /
  //     data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 
    text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{data.name}</div>
        {/* <div>
            <Rating value={productRating} readOnly></Rating>
        </div> */}
        <div></div>
        <div className="font-semibold">₹{data.price}</div>
        <div></div>
      </div>
    </div>
  );
}
