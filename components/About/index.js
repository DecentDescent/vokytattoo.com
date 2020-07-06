import styles from "./About.scss";
import TranslateContext from "../TranslateContext";
import classnames from "classnames";

const About = () => {
  return (
    <>
      {/* <section
        className={classnames(styles["section"], styles["section--disclaimer"])}
      >
        <div className={styles["disclaimer"]}>
          Vážení zákazníci, od 25. 5. budeme mít konečně otevřeno. Neváhejte nás
          kontaktovat ohledně předobjednání i nových termínů. Budeme se na Vás
          těšit!
          <br /> <br />
          Voky, Vojta a Jirka
        </div>
      </section> */}
      <section
        className={classnames(styles["section"], styles["section--about"])}
        id="about"
      >
        <div
          className={classnames(
            styles["container"],
            styles["container--center"]
          )}
        >
          <TranslateContext.Consumer>
            {(s) => {
              return (
                <>
                  <h1>{s["aboutTitle"]}</h1>
                  <p>{s["aboutLine1"]}</p>
                  <p>{s["aboutLine2"]}</p>
                  <p>{s["aboutLine3"]}</p>
                  <p>{s["aboutLine4"]}</p>
                </>
              );
            }}
          </TranslateContext.Consumer>
        </div>
      </section>
    </>
  );
};

export default About;
