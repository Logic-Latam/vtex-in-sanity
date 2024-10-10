export type LocaleString = {
  en: string;
  fr: string;
};
type Link = {
  title: string | LocaleString;
  url: string | LocaleString;
};

export type SanityImageType = {
  asset: {
    _ref: string;
    _type: string;
  };
};

export type IconContent = {
  title: string | LocaleString;
  icon: string | SanityImageType;
};

export type LinkList = {
  title: string | LocaleString;
  linksArray: Link[];
};

export interface FeaturedInformation {
  title: string | LocaleString;
  icon: string;
  callToAction?: {
    title: string | LocaleString;
    url: string | LocaleString;
  };
}

export interface LicenceInfo {
  title: string | LocaleString;
}

export interface RonaFooter {
  logo?: string;
  featuredInformation: FeaturedInformation[];
  featuredInformationSecondRow: FeaturedInformation[];
  footerLinkLists: LinkList[];
  paymentProviders: IconContent[];
  socialMedia: IconContent[];
  licenceInformation: LicenceInfo[];
}
