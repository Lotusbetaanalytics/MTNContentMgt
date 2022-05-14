declare interface ICmsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'CmsWebPartStrings' {
  const strings: ICmsWebPartStrings;
  export = strings;
}
