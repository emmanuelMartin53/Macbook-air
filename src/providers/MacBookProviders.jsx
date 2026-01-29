import { useState } from "react"
import { MacbookContext } from "./context"


const MacBookProviders = (props) => {

  const initialState = {
    capacityRam: "16Go",
    capacitySsd: "256Go"
  }

  const [productInfos, setProductInfos] = useState(initialState)

  const value = { productInfos }

  return <MacbookContext.Provider value={value} {...props} />
}

export default MacBookProviders
