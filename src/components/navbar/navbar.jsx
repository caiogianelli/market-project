import {
  Navbar,
  Group,
  ScrollArea,
  createStyles,
  Autocomplete,
} from "@mantine/core";
import { IconNotes, IconHome2, IconLock, IconSearch } from "@tabler/icons";
import { LinksGroup } from "./NavbarLinksGroup";

const mockdata = [
  {
    label: "Pagina Inicial",
    icon: IconHome2,
    link: "/",
  },
  {
    label: "Categorias",
    icon: IconNotes,
    initiallyOpened: true,
    link: "/figure",
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
    links: [
      { label: "Carrinho", link: "/cart" },
      { label: "Meus Pedidos", link: "/create-account" },
      { label: "Histórico", link: "/create-account" },
      { label: "Mudar Senha", link: "/create-account" },
      { label: "Deslogar", link: "/create-account" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

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
      <Navbar
        height={710}
        width={{ sm: 300 }}
        p="md"
        className={classes.navbar}
      >
        <Navbar.Section className={classes.header}>
          <Group position="apart">{/* <Logo width={120} /> */}</Group>
        </Navbar.Section>
        <Autocomplete
          mt={20}
          className={classes.search}
          placeholder="Buscar"
          icon={<IconSearch size={16} stroke={1.5} />}
          data={[]}
        />

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>

        {/* <Navbar.Section className={classes.footer}>
        <UserButton
        image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
          />
        </Navbar.Section> */}
      </Navbar>
    </Group>
  );
}
