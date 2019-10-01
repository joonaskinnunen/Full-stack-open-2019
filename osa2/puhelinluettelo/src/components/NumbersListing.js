import React from 'react'

const NumbersListing = (props) => {

  const handleClick = (nameObject) => {
    props.deleteNameFunction(nameObject)
  }
  return (
    <div>
      <h2>Numbers</h2>
      {props.personsArr.map((x, i) => x.name.toLowerCase().includes(props.filterWord.toLowerCase()) || x.number.includes(props.filterWord.toLowerCase()) ? <li key={i}>{x.name} {x.number}<button onClick={() => handleClick(x)}>delete</button></li> : console.log("Ei sisällä haettavaa sanaa!"))}
    </div>
  )
}

export default NumbersListing