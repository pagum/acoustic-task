export const articleType = {
  id: "e3240b78-5712-42aa-9b28-99cf13b90f04",
  rev: "5-6e7fe4942bceda074c88c96dc2c77d76",
  name: "Article",
  classification: "content-type",
  path: "/Article.json",
  kind: ["standalone"],
  thumbnail: { id: "c98d44eb-5976-42a1-97d6-9a5840fa9fb4" },
  contentThumbnail: { imageElement: "", source: "imageElementOrType" },
  description: "",
  creatorId: "d22a22f7-f08f-4699-80d5-fbaf64ba013b",
  created: "2019-09-09T11:50:59.640Z",
  lastModifierId: "d22a22f7-f08f-4699-80d5-fbaf64ba013b",
  lastModified: "2019-09-09T11:51:24.334Z",
  status: "ready",
  tags: ["oslo", "IBM sample"],
  elements: [
    {
      elementType: "text",
      fieldLabel: "Text",
      label: "Topic title",
      key: "heading",
      placeholder: { show: true, text: "Headline for your article" }
    },
    {
      elementType: "group",
      typeRef: { id: "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe" },
      label: "Lead image",
      key: "mainImage"
    },
    {
      elementType: "text",
      fieldLabel: "Text",
      label: "Author name",
      key: "author",
      helpText: "",
      placeholder: { show: true, text: "Author name" }
    },
    {
      elementType: "datetime",
      fieldLabel: "Date",
      label: "Date",
      key: "date",
      fieldType: "date-time",
      helpText:
        "Date and time is used when ordering a list of design articles. The time will not display in the website."
    },
    {
      elementType: "formattedtext",
      fieldLabel: "Text chunk",
      label: "Text for body section",
      key: "body",
      allowMultipleValues: true,
      minimumValues: 0,
      helpText:
        "The design topic, when displayed in the website, will interleave the text chunks and images to create a fluid layout.",
      placeholder: {
        show: true,
        text:
          "Start writing! Text does not need to be bound to one section. Spice up your article with images in between chunks of text."
      }
    }
  ]
};

export const exampleItem = {
  rev: "1-2c7ad9dd42e4f99e6b201f966d2d655e",
  thumbnail: { id: "c98d44eb-5976-42a1-97d6-9a5840fa9fb4" },
  keywords: [],
  kind: [],
  created: "2019-09-09T11:53:24.851Z",
  creatorId: "d22a22f7-f08f-4699-80d5-fbaf64ba013b",
  description: "",
  classification: "content",
  locale: "en",
  tags: [],
  selectedLayouts: [{ layout: { id: "design-article-layout" } }],
  elements: {
    heading: { elementType: "text", value: "Here is my Sample" },
    author: { elementType: "text", value: "Thomas Stober" },
    body: {
      values: ["<p>Here is the Body Text</p>\n"],
      elementType: "formattedtext"
    },
    date: { elementType: "datetime" },
    mainImage: {
      elementType: "group",
      value: {
        leadImage: {
          mode: "shared",
          profiles: ["3428916c-b356-4b47-aeb2-5eb8e3494b00"],
          asset: { id: "b437d9c3-177b-4a01-b342-75516072f298" },
          elementType: "image"
        },
        leadImageCaption: { elementType: "text", value: "Living Room" },
        leadImageCredit: { elementType: "text", value: "Shutterstock" }
      },
      typeRef: { id: "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe" }
    }
  },
  name: "Sample Article",
  lastModifierId: "d22a22f7-f08f-4699-80d5-fbaf64ba013b",
  typeId: "e3240b78-5712-42aa-9b28-99cf13b90f04",
  id: "fa9519d5-0363-4b8d-8e1f-627d802c08a8",
  lastModified: "2019-09-09T11:54:20.191Z",
  systemModified: "2019-09-09T11:54:20.191Z",
  status: "ready"
};
