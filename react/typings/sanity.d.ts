// interface Image {
//   _type: string;
//   asset: {
//     _ref: string;
//     _type: string;
//   };
// }

// type MarkDef = {
//   _key: string
//   _type: string
//   href: string
// }

// type Span = {
//   _key: string
//   _type: string
//   marks: [string]
//   text: string
// }

// type Block = {
//   _key: string
//   _type: string
//   style: string
//   markDefs: [MarkDef]
//   children: [Span]
// }

// interface Card {
//   _id: string
//   _rev: string
//   _type: string
//   _updatedAt: string
//   _createdAt: string
//   title: string
//   image: Image
//   details: [Block]
// }

// type SegmentationReference = {
//   _ref: string
//   _type: string
// }

// type SegmentableTextBlock = {
//   text: [Block]
//   segmentation: SegmentationReference
// }

// type SegmentableLink = {
//   _key: string
//   _type: string
//   title: string
//   url: string
//   segmentation: SegmentationReference
// }

// interface FeaturedInformation {
//   _key: string
//   _type: string
//   title: string
//   subtitle: string
//   callToAction: string
//   icon: Image
//   segmentation: SegmentationReference
// }

// type IconContent = {
//   _key: string
//   _type: string
//   title: string
//   icon: Image
//   segmentation: SegmentationReference
// }

// type LinkList = {
//   _key: string
//   _type: string
//   title: string
//   links: [SegmentableLink]
// }

// interface RonaFooter {
//   _id: string
//   _rev: string
//   _updatedAt: string
//   _createdAt: string
//   _type: string
//   title: string
//   logo: Image
//   featuredInformation: [FeaturedInformation]
//   featuredInformationSecondRow: [FeaturedInformation]
//   linkLists: [LinkList]
//   paymentProviders: [IconContent]
//   socialMedia: [IconContent]
//   licenceInformation: SegmentableTextBlock
// }
