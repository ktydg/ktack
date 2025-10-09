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
  readonly VITE_ENV_EXAMPLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
