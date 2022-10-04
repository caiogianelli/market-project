import styled from "@emotion/styled";
import { Navbar, Group, ScrollArea } from "@mantine/core";
import { IconNotes, IconHome2, IconLock, IconPercentage } from "@tabler/icons";
import { SearchAutoComplete } from "../search-auto-complete/searchAutoComplete";
import { LinksGroup } from "./NavbarLinksGroup";

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

const StyledLinks = styled(Navbar.Section)`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const StyledInner = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;

export function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Group>
      <Navbar width={{ sm: 300 }} p="md">
        <SearchAutoComplete />

        <StyledLinks grow component={ScrollArea}>
          <StyledInner>{links}</StyledInner>
        </StyledLinks>
      </Navbar>
    </Group>
  );
}
