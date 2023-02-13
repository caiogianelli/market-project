// vendors
import { IconChevronRight } from "@tabler/icons";
import { Box, UnstyledButton } from "@mantine/core";
import styled from "@emotion/styled";

// components
import { transientConfig } from "../../utils/styled-transient-config";

export const StyledControl = styled(UnstyledButton)`
  font-weight: 700;
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs}px 0px;
  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black)};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]};
    color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  }
`;

export const StyledLink = styled.a`
  font-weight: 500;
  display: block;
  cursor: pointer;
  text-decoration: none;
  padding-left: 30px;
  margin-left: 30px;

  font-size: ${({ theme }) => theme.fontSizes.sm};

  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.md}px`};

  color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7])};

  border-left: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]};

    color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.white : theme.black)};
  }
`;

export const ChevronIcon = styled(IconChevronRight, transientConfig)`
  transition: transform 200ms ease;
  transform: ${({ $opened }) => ($opened ? "rotate(90deg)" : "none")};
`;

export const StyledBox = styled(Box)`
  min-height: 220px;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
`;

export const StyledInner = styled.div`
  padding-top: ${({ theme }) => theme.spacing.sm}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`;
