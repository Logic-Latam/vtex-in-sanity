import { LocaleString } from "../typings/footer";

export const handleLocale = (text: string | LocaleString | undefined) => {
  if (!text) return "";
  return typeof text === "string" ? text : text.en;
};
