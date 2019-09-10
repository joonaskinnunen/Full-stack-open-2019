import React, { useState } from 'react'

const NewEntry = (props) => {
    return (
      <div>
        <h2>Add a new</h2>
        <form onSubmit={props.onSubmitFunction}>
          <div>
            name: <input value={props.nameInputValue} onChange={props.nameOnChangeFunction} />
          </div>
          <div>
            number: <input value={props.numberInputValue} onChange={props.numberOnChangeFunction} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

  export default NewEntry