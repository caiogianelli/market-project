import styled from "@emotion/styled";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";

const StyledCard = styled(Group)`
  margin-top: 10px;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;

const StyledImage = styled(Card.Section)`
  width: 400px;
`;

const StyledTitle = styled(Group)`
  margin-top: 2px;
  text-align: left;
  max-height: 500px;
  align-content: flex-start;
  margin-bottom: 15px;
  text-align: justify;
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  height: 60px;
  font-size: 25px;
  align-items: center;
  flex: 5px;
  margin-top: 20px;
`;

export function ProductDetails({
  image,
  title,
  price,
  type,
  offer,
  id,
  description,
  items,
  setItems,
}) {
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
    const todosOsItensQueNaoEOAtual = items.filter(
      (item) => product.id !== item.id
    );
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
    <SimpleGrid
      cols={2}
      breakpoints={[
        { maxWidth: "lg", cols: 2 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "sm", cols: 1 },
        { maxWidth: "xs", cols: 1 },
      ]}
    >
      <StyledCard>
        <StyledImage>
          <Image src={image} alt={image} />
        </StyledImage>
      </StyledCard>

      <StyledTitle>
        <div>
          <Text weight={500} size={18}>
            Produto:
          </Text>
          <Text weight={480} size={18}>
            {title}
          </Text>
          <Text align="left" size="xs" color="dimmed" mb={20}>
            {type}
          </Text>

          <Text weight={500} size={18}>
            Descrição:
          </Text>
          <Text weight={300}>{description}</Text>

          <Text
            align="right"
            size={40}
            weight={700}
            sx={{ lineHeight: 1 }}
            mt={50}
          >
            R$ {price.toFixed(2).toString().replace(".", ",")}
          </Text>
          <Text align="right" mt={10}>
            {offer != 0 && (
              <Badge variant="outline" p={"0 5px"}>
                {offer} % OFF
              </Badge>
            )}
          </Text>
        </div>
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
          {<IconShoppingCartPlus style={{ marginLeft: "10px" }} />}
        </StyledButton>
      </StyledTitle>
    </SimpleGrid>
  );
}
