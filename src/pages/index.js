import { Container } from "@mantine/core";
import ProductList from "@/components/ProductList";
import statusCookies from "@/store/useCartStore";
import isLoading from "./hooks/isLoading";
import ModalCookies from "@/components/ModalCookies";

export default function Home() {
  const isLoadingPage = isLoading();
  const cookies = statusCookies((state) => state.cookies);
  return (
     <Container my="md">
      { isLoadingPage ?
          cookies ? null : 
             <ModalCookies />
        : null
      }
      <ProductList />
    </Container>
  )
}

  