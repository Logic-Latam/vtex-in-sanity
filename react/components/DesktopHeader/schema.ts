const localeString = {
    title: "Title",
    type: "object",
    properties: {
        en: {
            title: "EN",
            type: "string",
        },
        fr: {
            title: "FR",
            type: "string",
        },
    },
};

const navigationItemSchema = {
    title: "Navigation Item",
    type: "object",
    properties: {
        title: {
            ...localeString,
        },
        url: {
            title: "URL",
            type: "string",
        },
    },
};

const featuredLinkSchema = {
    title: "Featured Link",
    type: "object",
    properties: {
        title: {
            ...localeString,
        },
        url: {
            title: "URL",
            type: "string",
        },
    },
};

export const schema = {
    title: "Header",
    type: "object",
    properties: {
        logo: {
            title: "Header Logo",
            description: "Image displayed in the header",
            type: "string",
            widget: {
                "ui:widget": "image-uploader",
            },
            default:
                "https://ronadev.vtexassets.com/assets/vtex.file-manager-graphql/images/32fa6e2a-caed-4e73-95d1-5ff19b97437f___5e9bbeee6993bcdc30cce2cbf88340db.svg",
        },
        topRightLinks: {
            title: "Top Right Links",
            type: "array",
            items: {
                title: "Top Right Link",
                type: "object",
                properties: {
                    title: {
                        ...localeString,
                    },
                    url: {
                        title: "URL",
                        type: "string",
                    },
                },
            },
        },
        mainNavigation: {
            title: "Main Navigation",
            type: "array",
            items: navigationItemSchema,
        },
        featuredLinks: {
            title: "Featured Links",
            type: "array",
            items: featuredLinkSchema,
        },
        searchBar: {
            title: "Search Bar",
            type: "object",
            properties: {
                placeholder: {
                    ...localeString,
                    title: "Search Placeholder",
                },
            },
        },
    },
};
