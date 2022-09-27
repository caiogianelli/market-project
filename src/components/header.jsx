import {
  createStyles,
  Header,
  Group,
  Burger,
  Modal,
  Drawer,
  ActionIcon,
  Button,
} from "@mantine/core";

import Link from "next/link";
import { IconHome, IconLogin } from "@tabler/icons";
import { useState } from "react";
import { AuthenticationTitle } from "./create-account/authentication";
import DarkTheme from "./dark-theme";
import { NavbarNested } from "./navbar/navbar";
import { SearchAutoComplete } from "./search-auto-complete/searchAutoComplete";
import { SetIndicator } from "./indicator";

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

export function HeaderSearch({ items, setItems }) {
  // const [opened, { toggle }] = useDisclosure(false);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const [modal, setModal] = useState(false);

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
            title="Prototype Shop"
            padding="xs"
            size="xm"
          >
            <NavbarNested />
          </Drawer>
        </Group>

        <Group>
          <SearchAutoComplete />

          <ActionIcon size={23}>
            <Link href={"/"}>
              <IconHome size={34} stroke={1.5} />
            </Link>
          </ActionIcon>

          <SetIndicator items={items} setItems={setItems} />

          <Button onClick={() => setModal(true)}>
            {<IconLogin size={23} stroke={1.5} />}Login
          </Button>

          <Modal
            opened={modal}
            onClose={() => setModal(false)}
            title="Criar Conta"
          >
            {<AuthenticationTitle />}
          </Modal>

          <Group position="center">
            <DarkTheme />
          </Group>
        </Group>
      </div>
    </Header>
  );
}
