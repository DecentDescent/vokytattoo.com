import styles from "./About.scss";
import TranslateContext from "../TranslateContext";
import classnames from "classnames";

const About = () => {
  return (
    <section
      className={classnames(styles["section"], styles["section--navy"])}
      id="about"
    >
      <TranslateContext.Consumer>
        {s => {
          return <>{s["ahoj"]}</>;
        }}
      </TranslateContext.Consumer>
    </section>
  );
};

export default About;
