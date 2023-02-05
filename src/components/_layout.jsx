import NavBar from "./NavBar";
import useCartStore from "@/store/useCartStore"
import { Container } from "@mantine/core";
import Hero from "./Hero";

export default function Layout({ children }) {
  const productCart = useCartStore(state => state.cart);
  
  return (
    <>
    <NavBar qty={productCart.length}/>
      <Container>
        <Hero />
      </Container>
      <main>
          {children}
      </main>
    </>
  );
}
