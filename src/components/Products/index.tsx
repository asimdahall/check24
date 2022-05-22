import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  theme,
  Text,
  UnorderedList,
  StatNumber
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icon";

const BankDetails = () => {
  return (
    <Box>
      <Stat>
        <StatLabel>Kredite24</StatLabel>
        <StatHelpText mt="0.6rem">
          Süd-West-Kreditbank Finanzierung GmbH
        </StatHelpText>
      </Stat>
    </Box>
  );
};

const ProductInfo = () => {
  return (
    <List spacing={4}>
      <UnorderedList>
        <ListItem>
          <Text fontSize="sm">
            (md) In love with React & Next Lorem ipsum dolor sit amet
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="sm">
            (md) In love with React & Next Lorem ipsum dolor sit amet
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="sm">
            (md) In love with React & Next Lorem ipsum dolor sit amet
          </Text>
        </ListItem>
      </UnorderedList>
    </List>
  );
};

const MinMonthlyRate = () => {
  return (
    <Stat>
      <StatLabel>Collected Fees</StatLabel>
      <StatNumber>£0.00</StatNumber>
      <StatHelpText>Feb 12 - Feb 28</StatHelpText>
    </Stat>
  );
};

const MinInterest = () => {
  return (
    <Stat>
      <StatLabel>Collected Fees</StatLabel>
      <StatNumber>£0.00</StatNumber>
      <StatHelpText>Feb 12 - Feb 28</StatHelpText>
    </Stat>
  );
};

const Products = () => {
  return (
    <Stack
      direction="row"
      border="1px solid"
      borderColor="gray.300"
      p="1.2rem"
      margin="0.6rem"
      borderRadius="6"
    >
      <BankDetails />
      <ProductInfo />
      <MinMonthlyRate />
      <MinInterest />
    </Stack>
  );
};

export default Products;
