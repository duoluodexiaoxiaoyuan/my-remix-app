import { useTranslation } from "react-i18next";
export default function Index() {
  let { t, i18n} = useTranslation();
  return (
    <div>
      <p id="index-page">
      This is a demo for Remix.
      <br />
      Check out{" "}
      <a href="https://remix.run">the docs at remix.run</a>.
    </p>
    <h1>{t("greeting", {lng: 'es'})}</h1>
    {/* {Object.keys(lngs)} */}
    <button onClick={() => {
      i18n.changeLanguage("es")
    }}>切换</button>
    </div>
  );
}
