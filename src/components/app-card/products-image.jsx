import styled from "@emotion/styled";
import { Card } from "@mantine/core";

const StyledCard = styled(Card)`
  cursor: pointer;
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]};
`;

const StyledImageSection = styled(Card.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]};
`;

const StyledImage = styled.img`
  width: 100%;
  min-height: 270px;
  height: auto;
  object-fit: cover;
`;

export function ProductsImage({ image }) {
  return (
    <StyledCard withBorder p={0}>
      <StyledImageSection>
        <StyledImage src={image} alt={image} />
      </StyledImageSection>
    </StyledCard>
  );
}
