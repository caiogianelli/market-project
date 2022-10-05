import styled from "@emotion/styled";
import { Card, Image, Text, Group, Badge, Button, Tooltip } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";
import Link from "next/link";
import { formatMoney } from "../../utils/format-money";

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white)};
  cursor: pointer;
  height: 340px;
  margin-top: 20px;
  padding: 0px 16px 16px 16px;
`;

const StyledCardTitle = styled(Group)`
  align-items: flex-start;
  height: 30px;
  display: inline-table;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const StyledImageSection = styled(Card.Section)`
  display: flex;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3])};
`;

const StyledPriceContainer = styled(Card.Section)`
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
const StyledButton = styled(Button)`
  border-radius: 4px;
  width: 100%;
  height: 35px;
  padding-left: 45px;
  padding-right: 45px;
`;

export function CategoryProducts({ image, title, price, type, offer, id, description, items, setItems }) {
  function addToCart() {
    let product = {
      image,
      title,
      price,
      type,
      offer,
      id,
      description,
      amount: 1,
    };
    const todosOsItensQueNaoEOAtual = items.filter((item) => product.id !== item.id);
    let newProductInCart = items.find((item) => product.id === item.id);
    if (newProductInCart) {
      newProductInCart["amount"] += 1;
    } else {
      newProductInCart = product;
    }
    const newItems = [newProductInCart, ...todosOsItensQueNaoEOAtual];

    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  }

  return (
    <StyledCard withBorder>
      <StyledImageSection>
        <Link href={`/produtos/${type}/${id}`}>
          <Image src={image[0]} alt={image[0]} />
        </Link>
      </StyledImageSection>

      <StyledCardTitle>
        <div>
          <Tooltip
            multiline
            transitionDuration={200}
            transition="fade"
            label={title}
            color="orange"
            withArrow
          >
            <Text lineClamp={1} weight={500}>
              {title}
            </Text>
          </Tooltip>

          <Text size="xs" color="dimmed">
            {type}
          </Text>
        </div>
      </StyledCardTitle>

      <StyledPriceContainer>
        <div>
          <Text size="xl" weight={500} sx={{ lineHeight: 1 }}>
            R$ {formatMoney(price)}
          </Text>
        </div>
        <div>{offer != 0 && <Badge variant="outline">{offer} % OFF</Badge>}</div>
      </StyledPriceContainer>

      <StyledPriceContainer>
        <StyledButton
          onClick={() => {
            showNotification({
              icon: <IconCheck />,
              title: "Produto adicionado ao carrinho",
            });
            addToCart();
          }}
        >
          Adicionar
          {<IconShoppingCartPlus size={18} style={{ marginLeft: "10px" }} />}
        </StyledButton>
      </StyledPriceContainer>
    </StyledCard>
  );
}
