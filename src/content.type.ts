export interface ContentType {
  classification: string;
  created: string;
  creatorId: string;
  description: string;
  elements: Element;
  id: string;
  kind: string[];
  lastModified: string;
  lastModifierId: string;
  locale: string;
  name: string;
  tags: string[];
  type: string;
  typeId: string;
}

export interface Element {
  [type: string]: {
    elementType: string;
    value?: string | ImageValue;
    values?: string[];

    typeRef?: { id: string }
  }
}
export interface ImageValue {
  leadImageCaption: LeadImageBase;
  leadImageCredit: LeadImageBase
  leadImage: any
}

interface LeadImageBase {
  elementType: string;
  value: string;
}