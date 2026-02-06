import { useState } from "react"
import { MacbookContext } from "./context"
import { formatSsdString } from "../utilities"


const MacBookProviders = (props) => {

  const initialState = {
    macBookAirPrice: 1099.0,
    capacityRam: "16 Go",
    capacitySsd: "256Go",
    ram: 0,
    ssd: 0,
    inputSsd: 0
  }

  const [productInfos, setProductInfos] = useState(initialState)

  const handleRamChange = (event) => {
      const ramCapacity = parseInt(event.target.value);
      const optionsRam =  event.target.options[event.target.selectedIndex].text
      // console.log(optionsRam)

    const ramQuantity = optionsRam.substring(0,  optionsRam.indexOf("Go") + 2)

      setProductInfos((prevState) => ({
        ...prevState,
        capacityRam: ramQuantity,
        ram: ramCapacity
      }))
  }

  const handleSsdChange = (event) => {
     const ssdCapacity = parseInt(event.target.value)
     //ID
     const ssdId = event.target.id
    //  console.log(idSsdCapacity)
     const formatSsd = formatSsdString(ssdId)
     setProductInfos((prevState) => ({
        ...prevState,
        ssd: ssdCapacity,
        capacitySsd: formatSsd,
        inputSsd: ssdCapacity
     }))

  }

  const subTotal = productInfos.macBookAirPrice + (productInfos.ram + productInfos.ssd)

  const value = {subTotal ,handleRamChange, handleSsdChange, productInfos}

  return <MacbookContext.Provider value={value} {...props} />
}

export default MacBookProviders
