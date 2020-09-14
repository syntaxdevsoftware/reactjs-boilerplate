import i18nFile from "i18n/pt";

export type I18n = typeof i18nFile;

export interface I18nContext {
  i18n: I18n;
  setI18n: React.Dispatch<React.SetStateAction<I18n>>;
}

export enum SupportedLocales {
  pt = "pt",
}
