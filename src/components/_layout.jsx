import NavBar from "./NavBar";
import useCartStore from "@/store/useCartStore"
import { Container } from "@mantine/core";
import Hero from "./Hero";

export default function Layout({ children }) {
  const productCart = useCartStore(state => state.cart);
  const sumCart = useCartStore(state => state.cartSum);
  
  return (
    <>
    <NavBar qty={productCart.length} sum={sumCart}/>
      <Container>
        <Hero />
      </Container>
      <main>
          {children}
      </main>
    </>
  );
}
