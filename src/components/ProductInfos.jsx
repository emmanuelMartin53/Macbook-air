import macBookAir from "../images/macbook-air.jpeg"

import useAndCheckMacBookDetails from "../providers/useAndCheckMacBookDetails"

const ProductInfos = () => {
  const {productInfos} = useAndCheckMacBookDetails()

  return (
    <div className="row">
      <div className="col-md-6 mt-3">
        <div className="bg-white p-3 d-flex flex-column" style={{borderRadius: "14px"}}>
          <div className="text-center mt-4">
            <img src={macBookAir} alt="macbook-air" className='img-fluid' />
          </div>
          <h5 className="mt-4">MacBook Air - Gris sidéral</h5>
          <h4 className="green">1 099,00 €</h4>
        </div>
      </div>

      <div className="col-md-6 mt-3">
        <div className="bg-white p-3 d-flex flex-column" style={{borderRadius: "14px"}}>
          <h3>Personnalisez votre MacBook Air - Gris sidéral</h3>
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
        </div>
      </div>
    </div>
  )
}

export default ProductInfos;
