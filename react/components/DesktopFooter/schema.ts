const localeString = {
  title: "Title",
  type: "object",
  properties: {
    en: {
      title: "EN",
      type: "string",
    },
    fr: {
      title: "EN",
      type: "string",
    },
  },
};
const featuredInformationSchema = {
  title: "Featured Information",
  type: "array",
  items: {
    title: "Item",
    type: "object",
    properties: {
      title: {
        ...localeString,
      },
      icon: {
        title: "Icon",
        type: "string",
        widget: { "ui:widget": "image-uploader" },
      },
      callToAction: {
        title: "Call to Action",
        type: "object",
        properties: {
          title: {
            ...localeString,
          },
          url: {
            ...localeString,
            title: "URL",
          },
        },
      },
    },
  },
};

export const schema = {
  title: "Footer",
  type: "object",
  properties: {
    logo: {
      title: "Footer Logo",
      description: "Image displayed in the footer",
      type: "string",
      widget: {
        "ui:widget": "image-uploader",
      },
      default:
        "https://ronadev.vtexassets.com/assets/vtex.file-manager-graphql/images/32fa6e2a-caed-4e73-95d1-5ff19b97437f___5e9bbeee6993bcdc30cce2cbf88340db.svg",
    },
    featuredInformation: {
      ...featuredInformationSchema,
    },
    featuredInformationSecondRow: {
      ...featuredInformationSchema,
      title: "Featured Information (Second Row)",
    },
    footerLinkLists: {
      title: "Link lists",
      type: "array",
      items: {
        title: "Link List",
        type: "object",
        properties: {
          title: {
            ...localeString,
          },
          linksArray: {
            title: "Links",
            description: "Link list items",
            type: "array",
            items: {
              title: "Link",
              type: "object",
              properties: {
                title: {
                  ...localeString,
                },
                url: {
                  ...localeString,
                  title: "Link URL",
                },
              },
            },
          },
        },
      },
    },
    licenceInformation: {
      title: "Licence Information",
      type: "array",
      items: {
        properties: {
          title: {
            ...localeString,
            title: "Licence Item",
          },
        },
      },
    },
    paymentProviders: {
      title: "Payment Providers",
      tpe: "array",
      items: {
        properties: {
          ...featuredInformationSchema,
          title: "Payment Provider Item",
        },
      },
    },
    socialMedia: {
      title: "Social Media",
      tpe: "array",
      items: {
        properties: {
          ...featuredInformationSchema,
          title: "Social Media Item",
        },
      },
    },
  },
};
