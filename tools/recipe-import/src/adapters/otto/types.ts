
export interface RecipeData {
  id: string;
  title: { value: string };
  onlineStoreUrl: string;
  fields: { key: string; value: string }[];
  all_steps: string;
  images?: { references: { nodes: ImageData[] } };
  collection: { value: string };
  meal: { value: string };
}

interface ImageData {
  image: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
}

export interface ServingData {
  servingsText: string;
  servingsMin: number | null;
  servingsMax: number | null;
}

export interface ParsedStep {
  type: 'step';
  content: string;
  stepNumber?: number;
  listIndex: number;
}
export interface ParsedImage {
  url: string;
  altText: string;
  width: number;
  height: number;
}
