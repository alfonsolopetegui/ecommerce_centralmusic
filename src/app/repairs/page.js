import React from "react";
import styles from "../../styles/repairsPage.module.css";

function repairsPage() {
  return (
    <>
      <div className={styles.repairsPageWrapper}>
        <div className={styles.title}>Repairs</div>
        <div className={styles.redLine}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="3"
            viewBox="0 0 58 3"
            fill="none"
          >
            <line y1="1.5" x2="58" y2="1.5" stroke="#AB0433" stroke-width="3" />
          </svg>
        </div>
        <div className={styles.texto}>
          Let us your info and we will contact you as soon as possible!
        </div>
        <div className={styles.subtexto}>
          Fill the data in the form. It will only take a couple minutes.
        </div>
        <form className={styles.form}>
          <div className={styles.formTitle}>Personal data</div>
          <div className={styles.file}>
            <label className={styles.label}>First name</label>
            <input className={styles.input}></input>
            <line className={styles.line}></line>
          </div>
          <div>
            <label>Second name</label>
            <input></input>
          </div>
          <div>
            <label>Date of Birth</label>
            <input></input>
          </div>
          <div>
            <label>Place of Birth</label>
            <input></input>
          </div>
          <div>
            <div>Contacts</div>
            <div>We will contact you on these</div>
            <div>
              <input></input>
            </div>
            <div>
              <input></input>
            </div>
          </div>
          <div>
            <label>
              Please, especified the instrument you would like to repair
            </label>
            <input></input>
          </div>
          <div>
            <button>SEND REQUEST</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default repairsPage;
