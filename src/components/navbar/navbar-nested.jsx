// vendors
import { Navbar, Group } from "@mantine/core";
import { IconNotes, IconHome2, IconLock, IconPercentage } from "@tabler/icons";

// components
import { SearchAutoComplete } from "../search-auto-complete/searchAutoComplete";
import { LinksGroup } from "./LinksGroup";

// styles
import * as S from "./styles"

const mockdata = [
  {
    label: "Pagina Inicial",
    icon: IconHome2,
    link: "/",
  },
  {
    label: "Promoções",
    icon: IconPercentage,
    link: "/offer",
  },
  {
    label: "Categorias",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Mangás", link: "/produtos/manga" },
      { label: "Figures", link: "/produtos/figure" },
      { label: "Vestuario", link: "/produtos/vestuario" },
      { label: "Acessórios", link: "/produtos/acessorios" },
    ],
  },
  {
    label: "Conta",
    icon: IconLock,
    links: [{ label: "Carrinho", link: "/cart" }],
  },
];

export function NavbarNested({ closeBar, hiddenSeach }) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} closeBar={closeBar} />);

  return (
    <Group>
      <Navbar withBorder={false}>
        <SearchAutoComplete hiddenSeach={hiddenSeach} />

        <Navbar.Section>
          <S.StyledInner>{links}</S.StyledInner>
        </Navbar.Section>
      </Navbar>
    </Group>
  );
}
