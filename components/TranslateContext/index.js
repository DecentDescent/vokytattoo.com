import React from "react";

export const languages = {
  en: {
    ahoj: "hello",
    jazyk: "Česky"
  },
  cs: {
    ahoj: "ahoj",
    jazyk: "English"
  }
};

const TranslateContext = React.createContext(languages.cs);

export default TranslateContext;
