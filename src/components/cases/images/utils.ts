export interface CustomImage {
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
