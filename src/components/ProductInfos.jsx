import macBookAir from "../images/macbook-air.jpeg"

import React from 'react'

const ProductInfos = () => {
  return (
    <>
      <div className="col-md-6 mt-3">
        <div className="bg-white p-3 d-flex flex-column" style={{borderRadius: "14px"}}>
          <div className="text-center mt-4">
            <img src={macBookAir} alt="macbook-air" className='img-fluid' />
          </div>
          <h5 className="mt-4">MacBook Air - Gris sidéral</h5>
          <h4 className="green">1 199,00 €</h4>

        </div>

      </div>

    </>
  )
}

export default ProductInfos;
