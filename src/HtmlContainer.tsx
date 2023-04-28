/* eslint-disable react/no-danger */
import { PreloadedState } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from 'shared/store/store';

interface HtmlContainerProps {
  children: React.ReactNode;
  preloadedState: PreloadedState<RootState>;
}

export function HtmlContainer({ children, preloadedState }: HtmlContainerProps) {
  const serializedPreloadedState = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
  return (
    <>
      <div id="root">{children}</div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__PRELOADED_STATE__ = ${serializedPreloadedState}`,
        }}
      />
    </>
  );
}
