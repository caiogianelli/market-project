// vendors
import { Card } from "@mantine/core";

// style
import styled from "@emotion/styled";

export const StyledCard = styled(Card)`
  cursor: pointer;
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]};
`;

export const StyledImageSection = styled(Card.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]};
`;

export const StyledImage = styled.img`
  width: 100%;
  min-height: 270px;
  height: auto;
  object-fit: cover;
`;