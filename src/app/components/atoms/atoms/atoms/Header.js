
import React from 'react';
import styles from "../../../../../styles/header.module.css";


const Header = () => {
    const menuItems = [
        { text: "Guitars", href: "#" },
        { text: "Accessories", href: "#" },
        { text: "Storage", href: "#" },
        { text: "Lessons", href: "#" },
        { text: "Repairs", href: "#" }
    ];

return (
    <div>
        <header>
            <div className={styles["nav-container"]}>

                <div href="#" className={styles["logo"]}>

                <img
                src={"Logo.png"} 
                alt="Guitar"/>
                <h1 className={styles["logo-name"]}><b>Central</b>Music</h1>

                </div>


                <div href="#" className={styles["user"]}>
                
                <img
                src={"User.png"} 
                alt="User"/>

                </div>



                <div href="#" className={styles["carrito"]}>
                    
                <img
                src={"carrito.png"} 
                alt="Carrito"/>
                
                </div>
                
                
                <nav className={styles["navigation"]}>
                <ul className={styles["menu"]}> 
                {menuItems.map(item => (
                <li className={styles["menu-item"]} key={item.text}>
                <a href={item.href}>{item.text}</a>
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