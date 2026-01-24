import CapacityWrapper from "./CapacityWrapper";
import {useState, useEffect} from "react"
import RamCapacities from "./RamCapacities";
import SsdCapacities from "./SsdCapacities";


const Capacity = ({capacityType}) => {


  const [items, setItems] = useState([])
  const [ssd, setSsd] = useState(0)
  console.log(items)

  const handleSsdChange = (event) => {
    return setSsd(+event.target.value)
  }

  useEffect(() => {
    fetch(`http://localhost:3030/${capacityType}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setItems(data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[capacityType])

  return (
    <div>
      {
        capacityType === "ram" ? (

          <CapacityWrapper capacityType={capacityType}>
              <select
                className="form-select form-select-outline w-50"
                name=""
                id=""
                aria-label="default select"
                onChange={() => {}}
              >
                {
                  items.map((capacity) => {
                   return (
                    <RamCapacities
                      key={capacity.id}
                      option={capacity.option}
                      price={capacity.price}
                    />
                   )
                  })
                }
              </select>
          </CapacityWrapper>
        ) : (
          <CapacityWrapper capacityType={capacityType}>
              {
                items.map((capacity) => {
                  return (
                    <SsdCapacities
                      key={capacity.id}
                      id={capacity.id}
                      label={capacity.label}
                      price={capacity.price}
                      selectedSsd={ssd}
                      handleSsdChangeFunc={handleSsdChange}
                    />
                  )
                })
              }
          </CapacityWrapper>
        )
      }
    </div>
  )
}

export default Capacity;
