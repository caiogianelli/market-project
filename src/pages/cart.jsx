import { Container } from "@mantine/core";
import { AppCart } from "../components/cart/app-cart";
import { FooterSocial } from "../components/footer";
import { HeaderSearch } from "../components/header";

const Cart = () => {
  return (
    <div>
      <HeaderSearch />

      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <AppCart />
      </Container>
      <FooterSocial />
    </div>
  );
};
export default Cart;
