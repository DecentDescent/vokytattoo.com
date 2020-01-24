import styles from "./LangSwitch.scss";
import TranslateContext from "../TranslateContext";

const LangSwitch = () => {
  return (
    <TranslateContext.Consumer>
      {s => {
        return <div className={styles["lang-switch"]}>{s["jazyk"]}</div>;
      }}
    </TranslateContext.Consumer>
  );
};

export default LangSwitch;
