import styled from "@emotion/styled";
import { Container, Drawer, Group, Header } from "@mantine/core";

// footer
export const StyledFooter = styled.div`
  margin-top: 60px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2])};
`;

export const StyledInner = styled(Container)`
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

export const StyledLinks = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
  gap: 0;
`;

// header
export const StyledContainer = styled.div`
  height: 70px;
`;

export const StyledHeader = styled(Header)`
  padding-left: ${(props) => props.theme.spacing.md}px;
  padding-right: ${(props) => props.theme.spacing.md}px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  border-bottom-width: 2px;
  z-index: 1;
`;

export const GroupDrawer = styled(Drawer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: 1000px;
    max-width: 100%;
  }
`;
