import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="94" y="306" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="269" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="308" rx="10" ry="10" width="280" height="88" />
    <rect x="94" y="379" rx="0" ry="0" width="0" height="1" />
    <rect x="132" y="314" rx="0" ry="0" width="1" height="1" />
    <rect x="5" y="423" rx="10" ry="10" width="92" height="30" />
    <rect x="130" y="418" rx="20" ry="20" width="152" height="45" />
    <circle cx="140" cy="125" r="125" />
  </ContentLoader>
);

export default Skeleton;
