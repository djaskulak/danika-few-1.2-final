import React from 'react';

function Band(props) {
  const { name, formed, origin, fans, style } = props

  return (
    <div className="Band">
        <h1>{ name }</h1>
        <p><b>Formed:</b> { formed }</p>
        <p><b>Origin:</b> { origin }</p>
        <p><b>Fans:</b> { fans }</p>
    </div>
  )
}

export default Band