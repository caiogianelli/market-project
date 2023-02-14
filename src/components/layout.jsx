// components
import { FooterSocial } from "./footer/footer";
import { HeaderSearch } from "./header/header";

export function Layout({ items, setItems, children }) {
  return (
    <>
      <HeaderSearch items={items} setItems={setItems} />

      {children}

      <FooterSocial />
    </>
  );
}
