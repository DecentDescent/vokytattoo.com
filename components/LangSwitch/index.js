import styles from "./LangSwitch.scss";
import TranslateContext from "../TranslateContext";
import Link from "next/link";

const LangSwitch = () => {
  return (
    <TranslateContext.Consumer>
      {s => {
        return s["langID"] === "en" ? (
          <Link href="/">
            <div className={styles["lang-switch"]}>{s["language"]}</div>
          </Link>
        ) : (
          <Link href="/en">
            <div className={styles["lang-switch"]}>{s["language"]}</div>
          </Link>
        );
      }}
    </TranslateContext.Consumer>
  );
};

export default LangSwitch;
