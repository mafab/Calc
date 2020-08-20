import React from 'react'
import '../App.css'

const Result = (props) => {
  return (
    <div className="resultBlock">
      <p>{props.result}</p>
    </div>
  )
}

export default Result
