import styles from "./Team.scss";
import TranslateContext from "../TranslateContext";
import classnames from "classnames";

const Team = props => {
  return (
    <section
      className={classnames(styles["section"], styles["section--team"])}
      id="team"
    >
      <div>
        <div
          className={classnames(
            styles["container"],
            styles["container--center"]
          )}
        >
          <TranslateContext.Consumer>
            {s => {
              return (
                <>
                  <h1>{s["teamTitle"]}</h1>
                  <p>{s["teamLine1"]}</p>
                </>
              );
            }}
          </TranslateContext.Consumer>
        </div>
        <div className={styles["teammates"]}>
          <div
            className={styles["teammate"]}
            onClick={() => props.galleryToggle("voky")}
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__title"]}>
              <h2>Voky</h2>
            </div>
          </div>
          <div
            className={styles["teammate"]}
            onClick={() => props.galleryToggle("vojta")}
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__title"]}>
              <h2>Vojta</h2>
            </div>
          </div>
          <div
            className={styles["teammate"]}
            onClick={() => props.galleryToggle("jirka")}
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__title"]}>
              <h2>Jirka</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
