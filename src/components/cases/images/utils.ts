export interface CustomImage {
  fit?: ImageFitType;
  position?: ImagePositionType;
  url: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  subtitle?: string;
  highlight?: {
    title: string;
    description: string;
  };
}

export enum ImageFitType {
  CONTAIN = 0,
  COVER = 1,
}

export enum ImagePositionType {
  TOP = 0,
  LEFT_TOP = 1,
}
