// vendors
import styled from "@emotion/styled";
import {
  Card as MantineCard,
  Image as MantineImage,
  Group as MantineGroup,
  Button as MantineButton,
  SimpleGrid,
} from "@mantine/core";

export const Grid = styled(SimpleGrid)`
  align-items: center;
  gap: 15px 15px;
  padding: 2px 15px 15px 15px;
  border: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

export const Card = styled(MantineGroup)`
  margin-top: 10px;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

export const Image = styled(MantineCard.Section)`
  width: 410px;
  padding: 10px;
  border: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

export const Btn = styled(MantineButton)`
  margin: 0px;
  height: 100px;
  padding: 0px;
  max-width: 120px;
  background-color: #ffa50000;
  &:hover {
    background-color: #fd7d1493;
  }
`;

export const Group = styled(MantineGroup)`
  margin: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: nowrap;
  border: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

export const Title = styled(MantineGroup)`
  margin-top: 2px;
  margin-right: 10px;
  text-align: left;
  max-height: 500px;
  align-content: flex-start;
  margin-bottom: 15px;
  text-align: justify;
`;

export const Button = styled(MantineButton)`
  border-radius: 4px;
  height: 60px;
  font-size: 25px;
  align-items: center;
  flex: 5px;
  margin-top: 20px;
`;
