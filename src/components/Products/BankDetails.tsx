import { Box, Text } from "@chakra-ui/react";
import { Bank } from "../../interfaces"; 

type BankDetailsProps = {
  bankDetails: Bank;
};


export const BankDetails = (props: BankDetailsProps) => {
  const { bankDetails } = props;
  return (
    <Box flex="1" textAlign="center" display="grid" placeItems="center">
      <Text fontSize="3xl" fontWeight="bold">{bankDetails.name}</Text>
      <Text fontSize="sm">
        {bankDetails?.detailedName}
      </Text>
    </Box>
  );
};
