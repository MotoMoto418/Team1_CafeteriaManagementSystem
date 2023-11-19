import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import logo from "/assets/logo_dish.png";
import CartCount from "./CartCount";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/">
              <Image src={logo} width={192} height={108} />
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
