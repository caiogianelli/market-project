import { useState } from "react";
import { Group, Box, Collapse, ThemeIcon, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import styled from "@emotion/styled";

const StyledControl = styled(UnstyledButton)`
  font-weight: 700;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0]};
    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.white : theme.black};
  }
`;

const StyledLink = styled.a`
  font-weight: 500;
  display: block;
  cursor: pointer;
  text-decoration: none;
  padding-left: 30px;
  margin-left: 30px;

  font-size: ${({ theme }) => theme.fontSizes.sm};

  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.md}px`};

  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7]};

  border-left: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0]};

    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.white : theme.black};
  }
`;

const ChevronIcon = styled(IconChevronRight)`
  transition: transform 200ms ease;
  transform: ${({ opened }) => (opened ? "rotate(90deg)" : "none")};
`;

const StyledBox = styled(Box)`
  min-height: 220px;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white};
`;

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link key={link.label} href={link.link}>
      <StyledLink>{link.label}</StyledLink>
    </Link>
  ));

  return (
    <>
      <StyledControl onClick={() => setOpened((o) => !o)}>
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

          {hasLinks && <ChevronIcon size={14} stroke={1.5} opened={opened} />}
        </Group>
      </StyledControl>

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

export function NavbarLinksGroup() {
  return <StyledBox></StyledBox>;
}
