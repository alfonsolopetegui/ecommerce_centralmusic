import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.masterContainer}>
      <div className={styles.myAccountContainer}>
        <h4 className={styles.myAccountTitle}> My Account </h4>
        <p className={styles.myAccountContent}> Overview </p>
        <p className={styles.myAccountContent}> Order History </p>
        <p className={styles.myAccountContent}> Wishlist </p>
        <p className={styles.myAccountContent}> Account Information </p>
      </div>

      <div className={styles.storeContainer}>
        <h4 className={styles.myAccountTitle}> Store </h4>
        <p className={styles.myAccountContent}> Security Notice </p>
        <p className={styles.myAccountContent}> Location & Hours </p>
        <p className={styles.myAccountContent}> Rentals </p>
        <p className={styles.myAccountContent}> Privacy Notice </p>
      </div>

      <div></div>

      <div className={styles.allLogosContainer}>
        <div className={styles.principalLogoContainer}>
          <img src="logoCompleto.png" alt="logo" />
          <div className={styles.logosContainer}>
            <img src="youtubeLogo.png" alt="logo" className={styles.icono} />
            <img src="twitterLogo.png" alt="logo" className={styles.icono} />
            <img src="instagramLogo.png" alt="logo" className={styles.icono} />
            <img src="facebookLogo.png" alt="logo" className={styles.icono} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
