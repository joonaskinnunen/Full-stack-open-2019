import React from 'react'

const FilterResults = (props) => {
    return (<>
      <p>Search <input value={props.inputValue} onChange={props.onChangeFunction} /></p>
    </>
    )
  }

  export default FilterResults