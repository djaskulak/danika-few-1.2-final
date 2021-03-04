import React from 'react';
import Like from '../like';
import './bands.css';

function Band(props) {
  const { name, formed, origin, fans } = props

  return (
    <div className="Band">
      <h1>{ name }</h1>
      <p><b>Formed:</b> { formed }</p>
      <p><b>Origin:</b> { origin }</p>
      <p><b>Fans:</b> { (fans * 1000).toLocaleString('en') }</p>

      <Like />
    </div>
  )
}

export default Band