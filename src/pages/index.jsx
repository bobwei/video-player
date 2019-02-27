/* eslint-disable jsx-a11y/media-has-caption, react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import compose from 'recompose/compose';

import createKeyBindings from '../functions/createKeyBindings';

const fn = ({ router }) => {
  const [src, setSrc] = useState(R.pathOr(null, ['query', 'src'])(router));
  const videoRef = React.createRef();
  useEffect(() => {
    return createKeyBindings({ ref: videoRef });
  });
  const onChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setSrc(url);
  };
  return (
    <>
      <div className="container">
        {src && <video className="video-player" autoPlay controls src={src} ref={videoRef} />}
        {!src && (
          <div className="upload">
            <input type="file" onChange={onChange} />
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container {
            text-align: center;
            padding: 5% 0;
            overflow: hidden;
          }
          .video-player {
            width: 80vw;
          }
          .upload {
            width: 80vw;
            height: 60vh;
            border: 3px dashed #ccc;
            margin: 0 auto;
          }
          .upload > input {
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        `}
      </style>
    </>
  );
};

export default compose(withRouter)(fn);
