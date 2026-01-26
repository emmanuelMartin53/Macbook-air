import React from 'react'
import { displayPrice } from '../utilities'

const SsdCapacities = ({id, label , price, selectedSsd ,handleSsdChangeFunc}) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="ssd"
        id={id}
        value={price}
        checked={selectedSsd === price}
        onChange={handleSsdChangeFunc}
      />
      <label className="form-check-label" htmlFor={id}>
          {label} {`(${displayPrice(price)})`}
      </label>

    </div>
  )
}

export default SsdCapacities
