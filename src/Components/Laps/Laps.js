import React from "react"

const Laps = props => {
  return (
    <ul className='list-group list-group-flush'>
      {props.laps.map(lap => {
        return (
          <h3>
            <li className='list-group-item'>
              <span className='text-dark'> Minute: </span>
              <span className='text-danger'> {lap.min} </span>
              <span className='text-dark'> Second: </span>
              <span className='text-danger'> {lap.sec} </span>
              <span className='text-dark'> Mili: </span>
              <span className='text-danger'> {lap.mili} </span>
            </li>
          </h3>
        )
      })}
    </ul>
  )
}
export default Laps
