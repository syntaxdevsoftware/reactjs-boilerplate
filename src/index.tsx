import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import locales from "i18n";
import Navigation from "navigation";
import { I18n, SupportedLocales } from "types/i18n";
import { getStorageLocale } from "services/storage/i18n";
import { i18nContext } from "context/i18n";

const App = () => {
  const [i18n, setI18n] = useState<I18n>();
  const i18nProviderValue = useMemo(() => ({ i18n, setI18n }), [i18n]);

  useEffect(() => {
    const storageLocale = getStorageLocale();

    if (storageLocale in SupportedLocales) {
      return setI18n(locales[storageLocale]);
    }

    const locale = navigator.language.split("-")[0];

    if (locale in SupportedLocales) {
      setI18n(locales[locale as SupportedLocales]);
      return;
    }

    return setI18n(locales.pt);
  }, []);

  return (
    <i18nContext.Provider value={i18nProviderValue}>
      <React.StrictMode>
        <Navigation />
      </React.StrictMode>
    </i18nContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
