import data from './metal.json';
import React from 'react';

function MetalMeta () {
  return (

    <div>
      <p>Bands: {data.length}</p>
    </div>

  )
}

export default MetalMeta;