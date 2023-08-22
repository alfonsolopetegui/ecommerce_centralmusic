"use client"
import React, { useContext } from "react";
import styles from "../../../../../styles/header.module.css";
import Link from "next/link";
import { TotalItems } from "./TotalItems";
import DataContext from "@/app/Context/DataContext";

const Header = () => {
  const { cart } = useContext(DataContext);

  const menuItems = [
    { text: "Guitars", href: "/GuitarsPage" },
    { text: "Accessories", href: "/AccesoriesPage" },
    { text: "Storage", href: "/StoragePage" },
    { text: "Lessons", href: "/LessonsPage" },
    { text: "Repairs", href: "/repairs" },
  ];

  return (
    <div>
      <header>
        <div className={styles["nav-container"]}>
          <div href="#" className={styles["logo"]}>
            <img src={"Logo.png"} alt="Guitar" />
            <Link href={"/"}>
              <h1 className={styles["logo-name"]}>
                <b>Central</b>Music
              </h1>
            </Link>
          </div>

          <div href="#" className={styles["user"]}>
            <img src={"User.png"} alt="User" />
          </div>

          <Link href={"/Cart"} className={styles["carrito"]}>
            <img src={"carrito.png"} alt="Carrito" />
          </Link>
          {cart.length > 0 && <TotalItems />}

          <nav className={styles["navigation"]}>
            <ul className={styles["menu"]}>
              {menuItems.map((item) => (
                <li className={styles["menu-item"]} key={item.text}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;