import useAndCheckMacBookDetails from "../providers/useAndCheckMacBookDetails"
import { formatPrice } from "../utilities";
import Validation from "./Validation";


const Confirmation = ({setStep}) => {

  const {productInfos, subTotal} = useAndCheckMacBookDetails()
  return (
    <>
      <div className="b-white p-3 d-flex flex-column" style={{borderRadius: "14px"}}>
        <h3 className="text-center">Bravo. Voici votre configuration finale ! </h3>

      <ul className="list-unstyled mt-4">
            <li>Puce Apple M4 avec CPU 10 coeurs, GPU 8 coeurs, Neural Engine 16 coeurs</li>
            <li>{productInfos.capacityRam} de mémoire unifiée</li>
            <li>SSD de {productInfos.capacitySsd}</li>
            <li>Écran Liquid Retina 13,6 pouces avec True Tone</li>
            <li>Caméra 12MP Center Stage</li>
            <li>Port de charge MagSafe 3</li>
            <li>Deux ports Thunderbolt 4</li>
            <li>Adaptateur secteur USB‑C 30 W</li>
            <li>Magic Keyboard rétroéclairé avec Touch ID - Français</li>
            <li>Apple Intelligence</li>
      </ul>

      <h4>Sous-Total:{" "}
        <span className="green">{`${formatPrice(subTotal)} €`}</span>
      </h4>
      </div>
      <Validation setStep={setStep} nextLevel="cartStep" />
    </>
  )
}



export default Confirmation
