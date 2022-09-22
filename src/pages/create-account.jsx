import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { useEffect, useState } from "react";
import { Container } from "@mantine/core";
import CreateAccount from "../components/create-account/fn-create-account";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProducts(products);
      });
  });

  return (
    <div>
      <HeaderSearch />

      <CreateAccount />
      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      ></Container>

      <FooterSocial />
    </div>
  );
}
