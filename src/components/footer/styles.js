import styled from "@emotion/styled";
import { Container, Group } from "@mantine/core";

// footer
export const Footer = styled.div`
  margin-top: 60px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2])};
`;

export const Inner = styled(Container)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  height: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: column;
  }
`;

export const Links = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
  gap: 0;
`;