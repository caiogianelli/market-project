import {
  createStyles,
  Header,
  Group,
  Burger,
  Modal,
  Button,
  Drawer,
} from "@mantine/core";

import Link from "next/link";
import { useState } from "react";
import { AuthenticationTitle } from "./create-account/authentication";
import DarkTheme from "./dark-theme";
import { NavbarNested } from "./navbar/navbar";
import { SearchAutoComplete } from "./search-auto-complete/searchAutoComplete";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));
const links = [
  { label: "Home", link: "/" },
  { label: "Carrinho", link: "/cart" },
];

export function HeaderSearch() {
  // const [opened, { toggle }] = useDisclosure(false);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const [modal, setModal] = useState(false);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      <a className={classes.link}>{link.label}</a>
    </Link>
  ));

  return (
    <Header height={56} className={classes.header} mb={0}>
      <div className={classes.inner}>
        <Group position="left">
          <Burger opened={opened} size="sm" onClick={() => setOpened(true)} />
        </Group>

        <Group>
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Neko Store"
            padding="xs"
            size="xm"
          >
            <NavbarNested />
          </Drawer>
        </Group>

        <Group>
          <SearchAutoComplete />
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
            <>
              <Modal
                opened={modal}
                onClose={() => setModal(false)}
                title="Criar Conta"
              >
                {<AuthenticationTitle />}
              </Modal>

              <Group position="center">
                <Button onClick={() => setModal(true)}>Login</Button>
              </Group>
              <Group position="center">
                <DarkTheme />
              </Group>
              {/* <Group position="center">
                <UserButton
                  image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                  name="administrador"
                  email="test@email.com"
                />
              </Group> */}
              <Group position="center"></Group>
            </>
          </Group>
        </Group>
      </div>
    </Header>
  );
}
