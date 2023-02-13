// vendors
import styled from "@emotion/styled";
import { Card, Group } from "@mantine/core";

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]};
  height: 350px;
  cursor: pointer;
  margin-top: 13px;
  padding: 0px;
`;

export const StyledImage = styled(Card.Section)`
  display: flex;
  height: 250px;
  overflow: hidden;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1])};
`;

export const StyledTitle = styled(Group)`
  align-content: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  min-height: 20px;
  max-height: 30px;
`;

export const StyledPrice = styled(Card.Section)`
  padding: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;