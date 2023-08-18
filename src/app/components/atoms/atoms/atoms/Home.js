import React from 'react';
import styles from "../../../../../styles/home.module.css";

const Home = () => {
    return (

    <div style={{
        backgroundImage: `url("https://images.pexels.com/photos/2350327/pexels-photo-2350327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }}>

            <div className={styles["home-title"]}>
                <h1>
                Fullfilling dreams <br />
                with strings <br />
                <span>attached</span>
                </h1>
            </div>
    </div>

)
};
    export default Home;
