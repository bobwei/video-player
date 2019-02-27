/* eslint-disable jsx-a11y/media-has-caption, react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import compose from 'recompose/compose';

import createKeyBindings from '../functions/createKeyBindings';

const fn = ({ router }) => {
  const src = R.pathOr('', ['query', 'src'])(router);
  const videoRef = React.createRef();
  useEffect(() => {
    return createKeyBindings({ ref: videoRef });
  });
  return (
    <>
      <div className="container">
        <video className="video-player" controls src={src} ref={videoRef} />
      </div>
      <style jsx>
        {`
          .container {
            text-align: center;
            padding: 5% 0;
            overflow: hidden;
          }
          .video-player {
            width: 80%;
          }
        `}
      </style>
    </>
  );
};

export default compose(withRouter)(fn);
