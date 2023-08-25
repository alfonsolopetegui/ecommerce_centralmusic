"use client";
import React, { useContext, useState } from "react";
// import styles from "../../../../../styles/header.module.css";
import Link from "next/link";
// import { TotalItems } from "./TotalItems";
import DataContext from "@/app/Context/DataContext";
import { TotalItems } from "./TotalItems";

const Header = () => {
  const { cart } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleLink = () => {
    return setIsOpen(!isOpen)
    }

  return (
    <header className="header_container">
      <div className="nav-container">
        <div className="nav-left">
          <Link href={"/"}>
            <img className="logo" src="Mobile.png"></img>
          </Link>

          <nav className="navbar_">
            <div className={`navbar_Links ${isOpen && "open"}`}>
              <Link href="/GuitarsPage" onClick={handleLink}>Guitars</Link>

              <Link href="/AccesoriesPage" onClick={handleLink}>Accesories</Link>

              <Link href="/StoragePage" onClick={handleLink}>Storage</Link>

              <Link href="LessonsPage" onClick={handleLink}>Lessons</Link>

              <Link href="/repairs" onClick={handleLink}>Repairs</Link>
            </div>

            <div
              className={`nav_toggle ${isOpen && "open"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div className="nav-icons">
          <Link href="/Cart">
            <img
              className="cart-icon"
              src="carrito.png"
              width={35}
              height={35}
            ></img>
          {cart.length > 0 && <TotalItems />}
          </Link>

          <Link href="#">
            <img
              className="user-icon"
              src="User.png"
              width={35}
              height={35}
            ></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
