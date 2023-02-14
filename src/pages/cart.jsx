// vendors
import { Container } from "@mantine/core";

// components
import { AppCart } from "../components/cart/app-cart";
import { FooterSocial } from "../components/footer/footer";
import { HeaderSearch } from "../components/header/header";

const Cart = ({ items, setItems }) => {
  return (
    <div>
      <HeaderSearch items={items} setItems={setItems} />

      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <AppCart items={items} setItems={setItems} />
      </Container>
      <FooterSocial />
    </div>
  );
};
export default Cart;
