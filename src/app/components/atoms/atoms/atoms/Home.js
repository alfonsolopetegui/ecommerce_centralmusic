import React from 'react';
import styles from "../../../../../styles/home.module.css";

const Home = () => {
    return (

    <div style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Grass_at_a_lawn_with_morning_dew_02.jpg")`,
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
