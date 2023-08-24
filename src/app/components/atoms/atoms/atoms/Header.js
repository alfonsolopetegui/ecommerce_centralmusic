"use client"
import React, { useContext,useState } from "react";
// import styles from "../../../../../styles/header.module.css";
import Link from "next/link";
// import { TotalItems } from "./TotalItems";
import DataContext from "@/app/Context/DataContext";

const Header = () => {
  const { cart } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header_container">
    <div className="nav-container">
      <div href="#">
        <Link href={"/"}>
          <img className="logo" src="Mobile.png"></img>
        </Link>
      </div>
        <nav className="navbar_">
        
            <div className={`navbar_Links ${isOpen && "open"}`}>
                
                    <Link href="/GuitarsPage" >
                        Guitars
                    </Link>
                
               
                    <Link href="/AccesoriesPage">
                        Accesories
                    </Link>
                
                
                    <Link href="/StoragePage">
                        Storage
                    </Link>
                
                    <Link href="LessonsPage">
                        Lessons
                    </Link>
                
                    <Link href="/repairs">
                        Repairs
                    </Link>
                
                    <Link href="/Cart">
                        <img className="cart-icon" src="carrito.png" width={35} height={35}></img>
                    </Link>
                    {cart.length > 0 && <TotalItems />}
                
                    <Link href="#">
                        <img className="user-icon" src="User.png" width={35} height={35}></img>
                    </Link>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    </div>
  </header>
  );
};

export default Header;
