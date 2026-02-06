import Capacity from "./Capacity";
import ProductInfos from "./ProductInfos";
import Validation from "./Validation";

const Configuration = ({setStep}) => {
  return(
    <div>
      <ProductInfos />
      <Capacity capacityType="ram"/>
      <Capacity capacityType="ssd"/>
      <Validation setStep={setStep} nextLevel="confirmationStep"/>
    </div>
  )
}
export default Configuration;
