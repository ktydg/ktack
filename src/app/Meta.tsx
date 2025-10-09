import { Fragment } from 'react';

const meta = {
  image: './android-chrome-192x192.png',
  title: 'Ktack App',
  description: 'This app based on Ktack',
  url: 'https://github.com/ktydg',
};

const metaEntries = Object.entries(meta);

export const Meta = () =>
  metaEntries.map(([key, value]) => (
    <Fragment key={key}>
      <meta content={value} property={`og:${key}`} />
      <meta content={value} name={`twitter:${key}`} />
    </Fragment>
  ));
