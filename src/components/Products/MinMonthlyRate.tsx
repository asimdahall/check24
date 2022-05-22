import {
  Box, Stat,
  StatLabel,
  StatNumber
} from "@chakra-ui/react";
import { IRate } from "../../interfaces";


 type MinMonthlyRateProps = {
  minMonthlyRate: IRate
}


export const MinMonthlyRate = (props: MinMonthlyRateProps) => {
  return (
    <Box flex="1">
      <Stat textAlign="center" h="100%" display="grid" placeItems="center" color="red.500">
        <StatLabel>Minimum Monthly Rate</StatLabel>
        <StatNumber>£{props?.minMonthlyRate?.monthlyRate}</StatNumber>
      </Stat>
    </Box>
  );
};
