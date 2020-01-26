import styles from "./Contact.scss";
import TranslateContext from "../TranslateContext";
import classnames from "classnames";

const Contact = () => {
  return (
    <section
      className={classnames(styles["section"], styles["section--contact"])}
      id="about"
    >
      <div
        className={classnames(styles["container"], styles["container--center"])}
      >
        <TranslateContext.Consumer>
          {s => {
            return (
              <>
                <h1>{s["contactTitle"]}</h1>
              </>
            );
          }}
        </TranslateContext.Consumer>

        {/* <div className={styles["contact--box"]}>
          <h3>Voky</h3>
          <p>
            777 777 777
            <br />
            voky@vokytattoo.com
          </p>
          <div>ig | fb</div>
        </div>

        <div className={styles["contact--box"]}>
          <h3>Vojta Balej</h3>
          <p>
            (+420) 739 203 045
            <br />
            voky@vokytattoo.com
          </p>
          <div>ig | fb</div>
        </div>

        <div className={styles["contact--box"]}>
          <h3>Jiří Korbel</h3>
          <p>
            (+420) 739 203 045
            <br />
            voky@vokytattoo.com
          </p>
          <div>ig | fb</div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
