import * as React from 'react';

import { makeIcon } from './private';

export const Lend = makeIcon(() => {
  return (
    <g fill="none" fillRule="evenodd">
      <path fill="#0A0A0E" fillOpacity=".01" d="M0 0H24V24H0z" transform="translate(.5)" />
      <path fill="#FFF" fillRule="nonzero" d="M11.84 21.69c5.414 0 9.84-4.436 9.84-9.85S17.254 2 11.84 2 2 6.426 2 11.84s4.426 9.85 9.84 9.85zm0-.59c-5.103 0-9.26-4.158-9.26-9.26 0-5.103 4.157-9.25 9.26-9.25 5.102 0 9.26 4.147 9.26 9.25 0 5.102-4.158 9.26-9.26 9.26zm-3.717-5.5c.107 0 .183-.043.236-.097l5.511-5.51.956-1-.01 1.826v3.062c0 .182.118.3.29.3.16 0 .268-.118.268-.31V8.348c0-.183-.107-.301-.28-.301H9.553c-.183 0-.301.107-.301.268 0 .172.118.28.3.28h4.9l-1 .966-5.521 5.522c-.054.054-.097.129-.097.226 0 .171.118.29.29.29z" transform="translate(.5)" />
    </g>
  );
});