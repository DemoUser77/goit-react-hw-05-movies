import React from 'react';

import { ColorRing } from 'react-loader-spinner';

 export const Loader = () => {
    return (
<div>
    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#96d3eb', '#703de7', '#29ceda', '#a667e0', '#5476e6']}
            />
    </div>
    )
}