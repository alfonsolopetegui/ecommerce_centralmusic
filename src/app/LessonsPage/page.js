import styles from "../../styles/repairsPage.module.css";

const LessonsPage = () => {
  return (
    <div className={styles.repairsPageWrapper}>
      <div className={styles.title}>Lessons</div>

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
        Fill the data in the form and one of our teachers will contact you. It will only take a couple minutes.
      </div>

      <form className={styles.form}>
        <div className={styles.formTitle}>Personal data</div>
        <div className={styles.file}>
          <label className={styles.label}>First name</label>
          <div className={styles.inputContent}>
            <div className={styles.subContent}>
              <input
                className={styles.input}
                placeholder="Alexander"
                type="text"
              ></input>
            </div>
            <line className={styles.line}></line>
          </div>
        </div>

        <div className={styles.file}>
          <label className={styles.label}>Second name</label>
          <div className={styles.inputContent}>
            <div className={styles.subContent}>
              <input
                className={styles.input}
                placeholder="Smith"
                type="text"
              ></input>
            </div>
            <line className={styles.line}></line>
          </div>
        </div>

        <div className={styles.file}>
          <label className={styles.label}>Date of Birth</label>
          <div className={styles.inputContent}>
            <div className={styles.subContent}>
              <input className={styles.input} type="date"></input>
            </div>
            <line className={styles.line}></line>
          </div>
        </div>

        <div className={styles.file}>
          <label className={styles.label}>Place of Birth</label>
          <div className={styles.inputContent}>
            <div className={styles.subContent}>
              <select className={styles.input}>
                <option value="CABA">CABA, Argentina</option>
                <option value="BSAS">Buenos Aires, Argentina</option>
                <option value="Salta">Salta, Argentina</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <line className={styles.line}></line>
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactText}>
            <div className={styles.contactTitle}>Contacts</div>
            <div className={styles.contactSubtitle}>
              We will contact you on these
            </div>
          </div>
          <div className={styles.inputContent}>
            <div className={styles.subContent1}>
              <icon className={styles.icon1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                    fill="#AB0433"
                  />
                </svg>
              </icon>
              <input
                className={styles.inputContact}
                placeholder="hola@gmail.com"
                type="email"
              ></input>
            </div>
            <line className={styles.line}></line>
          </div>
          <div className={styles.inputContent}>
            <div className={styles.subContent1}>
              <icon className={styles.icon1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.9999 15.46L15.7299 14.85L13.2099 17.37C10.3799 15.93 8.0599 13.62 6.6199 10.78L9.1499 8.25L8.5399 3H3.0299C2.4499 13.18 10.8199 21.55 20.9999 20.97V15.46Z"
                    fill="#AB0433"
                  />
                </svg>
              </icon>
              <input
                className={styles.input}
                placeholder="1122334455"
                type="text"
              ></input>
            </div>
            <line className={styles.line}></line>
          </div>
        </div>

        <div className={styles.file1}>
          <div className={styles.file1Title}>
            What styles of music would you like to learn?
          </div>
          <div className={styles.subContent2}>
            <input className={styles.inputContent2}></input>
            <line className={styles.line}></line>
          </div>
        </div>
      </form>
      <div className={styles.buttonContent}>
        <button className={styles.button}>SEND REQUEST</button>
      </div>
    </div>
);
};

export default LessonsPage;