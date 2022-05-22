import {
  Box, Stat,
  StatLabel,
  StatNumber,
  Button
} from "@chakra-ui/react";
import { IRate } from "../../interfaces";

type MinInterestProps = {
  minInterestProps: IRate;
};
export const MinInterest = (props: MinInterestProps) => {
  return (
    <Box flex="1">
      <Stat textAlign="center" h="100%" display="grid" placeItems="center" color="red.500">
        <StatLabel>Minimum Interest</StatLabel>
        <StatNumber>{props?.minInterestProps?.interest} %</StatNumber>
        <Button mt="0.8rem" variant="outline" colorScheme="blue">
          Continue
        </Button>
      </Stat>
    </Box>

  );
};
