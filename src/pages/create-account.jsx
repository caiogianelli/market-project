import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { Container } from "@mantine/core";
import CreateAccount from "../components/create-account/fn-create-account";

export default function Home() {
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
