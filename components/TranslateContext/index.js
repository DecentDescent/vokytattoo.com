import React from "react";

export const languages = {
  en: {
    langID: "en",
    aboutTitle: "About Studio",
    aboutLine1:
      "The shop was founded by Jiří “Voky” Vokálek in 2004. Voky has been tattooing for over 22 years and has worked in various shops both locally and abroad throughout his career before setting up his own shop in Prague.",
    aboutLine2:
      "Vojta and Jirka joined the shop seven years ago and have been a steady part of things since then. Together they make up team Voky tattoo.",
    aboutLine3:
      "We’re open to tattooing in any style and thanks to our many years of experience, we can create a custom tattoo just for you.",
    aboutLine4:
      "Be aware: The opening hours of the shop are subject to change. If you plan on visiting us, please contact us first via email or phone.",
    language: "Česky",
    teamTitle: "Our Work",
    teamLine1: (
      <>
        You can check our latest work on{" "}
        <a href="https://www.facebook.com/vokytattoo/" target="_blank">
          Facebook
        </a>{" "}
        or{" "}
        <a href="https://www.instagram.com/voky_tattoo/" target="_blank">
          Instagram
        </a>
        .
      </>
    ),

    contactTitle: "Contact"
  },
  cs: {
    langID: "cs",
    aboutTitle: "O Studiu",
    aboutLine1:
      "Jsme privátní studio s rodinnou a přátelskou atmosférou umístěné v klidné části Smíchova.",
    aboutLine2:
      "Studio bylo založeno Jiřím „Voky“ Vokálkem v roce 2004. Voky tetuje přes 22 let a za svou kariéru prošel několika studii, včetně studií v zahraničí než zakotvil natrvalo v Praze. Před sedmi lety se studio rozrostlo o Vojtu a Jirku a společně tvoří tým Voky Tattoo.",
    aboutLine3:
      "Jsme otevřeni všem stylům a díky naším dlouholetým zkušenostem společně s Vámi vytvoříme tetování přesně na míru.",
    aboutLine4:
      "Upozornění: Otevírací doba je pouze orientační, pokud se k nám chystáte, ozvěte se prosím předem prostřednictvím emailu nebo telefonu.",
    language: "English",
    teamTitle: "Naše práce",
    teamLine1: (
      <>
        Naše nejnovější práce můžete najít na{" "}
        <a href="https://www.facebook.com/vokytattoo/" target="_blank">
          Facebooku
        </a>{" "}
        nebo{" "}
        <a href="https://www.instagram.com/voky_tattoo/" target="_blank">
          Instagramu
        </a>
        .
      </>
    ),
    contactTitle: "Kontakt"
  }
};

const TranslateContext = React.createContext(languages.cs);

export default TranslateContext;
