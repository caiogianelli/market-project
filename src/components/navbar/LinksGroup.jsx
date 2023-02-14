// vendors
import { useState } from "react";
import { Group, Box, Collapse, ThemeIcon } from "@mantine/core";
import Link from "next/link";

// style
import * as S from "./styles"

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link, closeBar }) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link key={link.label} href={link.link}>
      <S.Link>{link.label}</S.Link>
    </Link>
  ));

  return (
    <>
      <S.Control onClick={() => setOpened((o) => !o)}>
        <Group position="apart" spacing={0}>
          {link ? (
            <Link href={link || ""}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ThemeIcon variant="light" size={30}>
                  <Icon size={18} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
            </Link>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size={18} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          )}

          {hasLinks && <S.ChevronIcon size={14} stroke={1.5} $opened={opened} />}
        </Group>
      </S.Control>

      {hasLinks && (
        <Collapse onClick={closeBar} in={opened}>
          {items}
        </Collapse>
      )}
    </>
  );
}

export function NavbarLinksGroup() {
  return <S.Box></S.Box>;
}
