import { Container } from "@mantine/core";
import { FooterSocial } from "./footer";
import { HeaderSearch } from "./header";

export function Layout({ items, setItems, children }) {
  return (
    <>
      <HeaderSearch items={items} setItems={setItems} />

      {children}

      <FooterSocial />
    </>
  );
}
