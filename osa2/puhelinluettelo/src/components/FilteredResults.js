import React from 'react'

const FilteredResults = (props) => {
  return (<div>
    <p>Filter shown with <input value={props.inputValue} onChange={props.onChangeFunction} /></p>
  </div>
  )
}

export default FilteredResults