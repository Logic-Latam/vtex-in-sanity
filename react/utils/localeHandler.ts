import { LocaleString } from "../typings/footer";

export const handleLocale = (text: string | LocaleString | undefined, locale = 'en') => {
  if (!text) return '';
  return typeof text === 'string' ? text : text[locale as 'en' | 'fr'];
};
