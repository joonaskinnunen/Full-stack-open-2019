import React from 'react'

const NumbersListing = (props) => {
    return (
      <div>
        <h2>Numbers</h2>
        {props.personsArr.map((x, i) => x.name.toLowerCase().includes(props.filterWord.toLowerCase()) || x.number.includes(props.filterWord.toLowerCase()) ? <p key={i}>{x.name} {x.number}</p> : console.log("Ei sisällä haettavaa sanaa!"))}
      </div>
    )
  }

export default NumbersListing