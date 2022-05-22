import {
  Box,

  List,
  ListIcon,
  ListItem, Text
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { SpeedInfo } from "../../interfaces";
import { useLargerThan1280 } from "../../hooks/useLargerThan1280";

type ProductInfoProps = {
  productInfo: SpeedInfo;
};
export const ProductInfo = (props: ProductInfoProps) => {
  const { productInfo } = props;
  const isLargerThan1280 = useLargerThan1280();


  return (
    <Box flex="1" display="grid" pl="1.4rem" placeItems={isLargerThan1280 ? "initial" : 'center'}>
      <Box textAlign={isLargerThan1280 ? "left" : 'center'}>
        <Text fontSize="sm">{productInfo.title}</Text>
        <Text fontSize="xs">{productInfo?.subTitle}</Text>
      </Box>
      <List spacing={1} mt="0.6rem">
        {productInfo?.titledPhrases[0]?.phrases?.map(phrase => {
          return <ListItem key={phrase?.creditSpeedText}>
            <Text fontSize="xs" color='green.500' fontWeight={phrase?.bold ? "800" : "500"}>
              <ListIcon as={CheckIcon} />
              {phrase?.creditSpeedText}
            </Text>
          </ListItem>;
        })}


      </List>
    </Box>
  );
};
