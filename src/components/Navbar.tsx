import { Box, Center, Container, Text } from "@chakra-ui/react"

const Navbar = () => {
    return <Box width="100%" height="12rem" background="blue.600" position="fixed" zIndex='banner' top = "0">
        <Center h="100%">
            <Text fontSize="4xl" color="white" fontWeight="bold">Check24</Text>
        </Center>
    </Box>
}

export default Navbar