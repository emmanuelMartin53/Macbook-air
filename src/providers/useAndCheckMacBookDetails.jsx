import { useContext } from "react"
import { MacbookContext } from "./context";



const useAndCheckMacBookDetails = () => {

  const values = useContext(MacbookContext)

  if (!values) {
      throw new Error("Accès refusé");
  }
  return values
}

export default useAndCheckMacBookDetails
