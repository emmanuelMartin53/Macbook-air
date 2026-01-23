import Capacity from "./Capacity";
import ProductInfos from "./ProductInfos";

const Configuration = () => {
  return(
    <div>
      <ProductInfos />
      <Capacity capacityType="ram"/>
      <Capacity capacityType="ssd"/>
    </div>
  )
}
export default Configuration;
