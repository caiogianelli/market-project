import { Header, Group, Burger, Modal, Drawer, ActionIcon, Button } from "@mantine/core";
import Link from "next/link";
import { IconHome, IconLogin } from "@tabler/icons";
import { useState } from "react";
import { AuthenticationTitle } from "./create-account/authentication";
import DarkTheme from "./dark-theme";
import { NavbarNested } from "./navbar/navbar-nested";
import { SearchAutoComplete } from "./search-auto-complete/searchAutoComplete";
import { SetIndicator } from "./indicator";
import styled from "@emotion/styled";

const S = {};

S.Container = styled.div`
  height: 70px;
`;

S.Header = styled(Header)`
  padding-left: ${(props) => props.theme.spacing.md}px;
  padding-right: ${(props) => props.theme.spacing.md}px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  border-bottom-width: 2px;
`;

S.GroupDrawer = styled(Drawer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 1000px;
    max-width: 100%;
  }
`;

export function HeaderSearch({ items, setItems }) {
  const [opened, setOpened] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <S.Container>
      <S.Header fixed>
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
      </S.Header>
    </S.Container>
  );
}
