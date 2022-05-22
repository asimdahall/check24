import React from "react";
import { Box, Center, Container, Grid } from "@chakra-ui/react";
import { useVirtual } from 'react-virtual'
import Products from "./components/Products";
import { IProduct, IProducts } from "./interfaces";
import data from './assets/products.json'
import Navbar from "./components/Navbar";
import { useLargerThan1280 } from "./hooks/useLargerThan1280";

const fetchData = () => {
  return new Promise<IProduct[]>((resolve, reject) => {
    // @ts-expect-error
    setTimeout(() => resolve(data.products), 0);
  })
}

const ProductsRenderer = (props: { products: IProduct[] }) => {
  const parentRef = React.useRef<HTMLDivElement>(null)

  const isLargerThan1280 = useLargerThan1280()

  const rowVirtualizer = useVirtual({
    size: props.products.length,
    parentRef,
    estimateSize: React.useCallback(() => isLargerThan1280 ? 200 : 600, [isLargerThan1280]),
  })

  return <Grid placeItems="center" w='100%' ref={parentRef} height="calc(100vh - 12.6rem)" overflow="auto">
    <Box

      style={{
        height: `${rowVirtualizer.totalSize}px`,
        width: '80vw',
        position: 'relative',
      }}

    >
      {rowVirtualizer.virtualItems.map(virtualRow => {
        const product = props?.products[virtualRow.index]
        return <Box
          key={virtualRow.index}
          pt='1.2rem'
          position='absolute'
          top="0"
          left="0"
          width='100%'
          height={`${virtualRow.size}px`}
          transform={`translateY(${virtualRow.start}px)`}
          _first={{
            paddingTop: 0
          }}
        >
          <Products product={product} key={product.productId} />
        </Box>
      })}


    </Box>

  </Grid >
}

export default function App() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    fetchData().then((data: IProduct[]) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Center flexDirection="column" position="relative" mt="12.6rem">
        <ProductsRenderer products={products} />
      </Center>
    </>
  );
}
