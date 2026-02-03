import { useState } from "react"
import { MacbookContext } from "./context"


const MacBookProviders = (props) => {

  const initialState = {
    macBookAirPrice: 1099.0,
    capacityRam: "16 Go",
    capacitySsd: "256Go",
    ram: 0
  }

  const [productInfos, setProductInfos] = useState(initialState)

  const handleRamChange = (event) => {
    const ramCapacity = parseInt(event.target.value);
    setProductInfos((prevState) => ({
      ...prevState,
      ram: ramCapacity
    }))
  }

  const subTotal = productInfos.macBookAirPrice + productInfos.ram

  const value = {subTotal ,handleRamChange, productInfos }

  return <MacbookContext.Provider value={value} {...props} />
}

export default MacBookProviders
