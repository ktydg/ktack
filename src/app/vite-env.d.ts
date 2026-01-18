/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string;
  readonly VITE_WEBSITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
