import styled from "@emotion/styled";
import { Card, Image, Text, Group, Badge, Tooltip } from "@mantine/core";
import Link from "next/link";

const StyledCard = styled(Card)`
  background-color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]};
  height: 350px;
  cursor: pointer;
  margin-top: 13px;
  padding: 0px;
`;

const StyledImage = styled(Card.Section)`
  display: flex;
  height: 250px;
  overflow: hidden;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1]};
`;

const StyledTitle = styled(Group)`
  align-content: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  min-height: 20px;
  max-height: 30px;
`;

const StyledPrice = styled(Card.Section)`
  padding: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]};
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

export function ProductsCarousel({ image, title, price, type, offer, id }) {
  return (
    <StyledCard withBorder p={0}>
      <Link href={`/produtos/${type}/${id}`}>
        <StyledImage>
          <Image src={image} alt={image} />
        </StyledImage>
      </Link>

      <StyledTitle>
        <div>
          <Tooltip label={title} color="orange" withArrow multiline>
            <Text lineClamp={1} weight={500} size="lg">
              {title}
            </Text>
          </Tooltip>
          <Text size="xs" color="orange">
            {type}
          </Text>
        </div>
      </StyledTitle>

      <StyledPrice>
        <Group>
          <div>
            <Text size="22px" weight={600} sx={{ lineHeight: 1 }}>
              R$ {price.toFixed(2).toString().replace(".", ",")}
            </Text>
          </div>

          <div>
            {offer != 0 && (
              <Badge variant="outline" p={"0 5px"}>
                {offer} % OFF
              </Badge>
            )}
          </div>
        </Group>
      </StyledPrice>
    </StyledCard>
  );
}
