import { useMediaQuery } from "@chakra-ui/react";


export const useLargerThan1280 = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  return isLargerThan1280;
};
