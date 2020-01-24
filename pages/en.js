import Container from "../components/Container";
import { languages } from "../components/TranslateContext";
import TranslateContext from "../components/TranslateContext";

function IndexPage() {
  return (
    <TranslateContext.Provider value={languages.en}>
      <Container />
    </TranslateContext.Provider>
  );
}
export default IndexPage;
