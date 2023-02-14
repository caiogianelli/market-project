// vendors
import styled from "@emotion/styled";
import { Group, Card as MantineCard, Button as MantineButton, Image as MantineImage } from "@mantine/core";


export const Card = styled(MantineCard)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
  cursor: pointer;
  height: 340px;
  margin-top: 20px;
  padding: 0px 16px 16px 16px;
`;

export const CardTitle = styled(Group)`
  align-items: flex-start;
  height: 30px;
  display: inline-table;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ImageSection = styled(MantineCard.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

export const PriceContainer = styled(MantineCard.Section)`
  padding: 8px;
  border-top: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
  height: 35px;
  margin-bottom: 5px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const Button = styled(MantineButton)`
  border-radius: 4px;
  width: 100%;
  height: 35px;
  padding-left: 45px;
  padding-right: 45px;
`;

export const Image = styled(MantineImage)`
`