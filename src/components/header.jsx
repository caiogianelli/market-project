// vendors
import { Group, Burger, Modal, ActionIcon, Button } from "@mantine/core";
import Link from "next/link";
import { IconHome, IconLogin } from "@tabler/icons";
import { useState } from "react";

// components
import DarkTheme from "./dark-theme";
import { NavbarNested } from "./navbar/navbar-nested";
import { SetIndicator } from "./indicator";
import { AuthenticationTitle } from "./create-account/authentication";
import { SearchAutoComplete } from "./search-auto-complete/searchAutoComplete";

// styles
import * as S from "./styles"

export function HeaderSearch({ items, setItems }) {
  const [opened, setOpened] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <S.StyledContainer>
      <S.StyledHeader fixed>
        <Group position="left">
          <Burger opened={opened} size="sm" onClick={() => setOpened(true)} />
        </Group>

        <Group>
          <S.GroupDrawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Prototype Shop"
            padding="xs"
            breakpoints={[{ maxWidth: "lg" }, { maxWidth: "md" }]}
          >
            <NavbarNested closeBar={() => setOpened(false)} hiddenSeach={opened} />
          </S.GroupDrawer>
        </Group>

        <Group>
          <SearchAutoComplete />

          <Link href={"/"}>
            <ActionIcon size={23}>
              <IconHome stroke={1.5} />
            </ActionIcon>
          </Link>

          <SetIndicator items={items} setItems={setItems} />

          <Button onClick={() => setModal(true)}>{<IconLogin size={23} stroke={1.5} />}Login</Button>

          <Modal opened={modal} onClose={() => setModal(false)} title="Criar Conta">
            {<AuthenticationTitle />}
          </Modal>

          <Group position="center">
            <DarkTheme />
          </Group>
        </Group>
      </S.StyledHeader>
    </S.StyledContainer>
  );
}
