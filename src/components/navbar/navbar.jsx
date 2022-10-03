import { Navbar, Group, ScrollArea, createStyles } from "@mantine/core";
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

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Group>
      <Navbar width={{ sm: 300 }} p="md">
        <SearchAutoComplete />

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>
      </Navbar>
    </Group>
  );
}
