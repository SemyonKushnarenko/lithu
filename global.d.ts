declare global {
  interface Window {
    ImageMapPro?: {
      init: (selector: string, config: Record<string, unknown>) => void;
    };
  }
}

export {};
