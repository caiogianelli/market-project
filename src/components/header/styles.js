import styled from "@emotion/styled";
import { Drawer, Header as MantineHeader } from "@mantine/core";

export const Container = styled.div`
  height: 70px;
`;

export const Header = styled(MantineHeader)`
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