import React from 'react'

function Forlop() {
    const nameArr = ["aa", "bb", "cc"];
    let displayName = "he"
    for(let i=0;i<nameArr.length;i++ );{
        displayName = displayName+nameArr
    }
  return (
    <div>{displayName}</div>
  )
}

export default Forlop