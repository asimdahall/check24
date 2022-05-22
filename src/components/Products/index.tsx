import {
  Stack,
} from "@chakra-ui/react";
import { IProduct } from "../../interfaces";
import { BankDetails } from "./BankDetails";
import { ProductInfo } from "./ProductInfo";
import { MinMonthlyRate } from "./MinMonthlyRate";
import { MinInterest } from "./MinInterest";
import { useLargerThan1280 } from "../../hooks/useLargerThan1280";


type ProductProps = {
  product: IProduct
}
const Products = (props: ProductProps) => {
  const { product } = props;
  const isLargerThan1280 = useLargerThan1280()
  return (

    <Stack
      direction={isLargerThan1280 ? "row" : "column"}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="6"
      height="100%"
      flex="1"
      p="0.6rem"
      marginTop="1.4rem"
      _first={{
        marginTop: 0
      }}

    >
      <BankDetails bankDetails={product?.bank} />
      <ProductInfo productInfo={product?.speedInfo} />
      <MinMonthlyRate minMonthlyRate={product?.rates?.effective?.min} />
      <MinInterest minInterestProps={product?.rates?.effective?.min} />
    </Stack>
  );
};

export default Products;
