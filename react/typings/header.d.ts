export type LocaleString = {
    en: string;
    fr: string;
};

export type Link = {
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
    callToAction?: Link;
    iconContentSegmentation?: {
        _ref: string;
        _type: string;
    };
};

export type NavigationMenu = {
    title: string | LocaleString;
    url: string;
};

export interface HeaderEvent {
    _key: string;
    _ref: string;
    _type: string;
}

export interface RonaHeader {
    logo?: string;
    topRightLinks: Link[];
    mainNavigation: NavigationMenu[];
    featuredLinks: Link[];
    rightAlignedMenuLinks: IconContent[];
    headerEvents?: HeaderEvent[];
}

// Type '{ logo: string; topRightLinks: { title: string; url: string; }[]; mainNavigation: { title: { en: string; fr: string; }; url: string; }[]; featuredLinks: { title: { en: string; fr: string; }; url: string; }[]; searchBar: { ...; }; }' is not assignable to type 'Partial<RonaHeader>'.
//   Types of property 'mainNavigation' are incompatible.
//     Type '{ title: { en: string; fr: string; }; url: string; }[]' is not assignable to type 'NavigationMenu[]'.
//         Property 'links' is missing in type '{ title: { en: string; fr: string; }; url: string; }' but required in type 'NavigationMenu'.