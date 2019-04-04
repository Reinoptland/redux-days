import React from 'react'

const Land = (props) => {
    return (
      <div>
        <h1>LAND:</h1>
        <h2>KIND: {props.land.kind}</h2>
        <h3>INCOME: {props.land.income}</h3>
      </div>
    )
}

export default Land