// vendors
import { Table, Text, ScrollArea, Button, Box, Container } from "@mantine/core";
import { IconTrash } from "@tabler/icons";

// components
import { formatMoney } from "../../utils/format-money";
import { CartItem } from "./cart-item";

export function AppCart({ items, setItems }) {
  const amountTotal = getSumAmount();
  const priceTotal = getSumPrice();

  function getSumAmount() {
    let atotal = 0;
    items.forEach((product) => {
      atotal += product.amount;
    });
    return atotal;
  }

  function getSumPrice() {
    let pTotal = 0;
    items.forEach((product) => {
      pTotal += product.amount * product.price;
    });
    return pTotal;
  }

  if (items === null || items.length === 0) {
    return (
      <Container align="center" my={200}>
        <Text size={60} weight={700} color="#d052024a">
          Carrinho Vazio
        </Text>
      </Container>
    );
  }

  function removeAllItem() {
    let products = [];

    localStorage.setItem("items", JSON.stringify(products));
    setItems(products);
  }

  return (
    <ScrollArea>
      <Box mt={10} align="right">
        <Button
          radius="sm"
          variant="outline"
          color="orange"
          size={"xs"}
          style={{ flex: 1 }}
          onClick={removeAllItem}
        >
          {<IconTrash stroke={1.5} size={18} style={{ marginRight: "10px" }} color="orange" />} Limpar
          Carrinho
        </Button>
      </Box>
      
      <Table striped verticalSpacing="sm">
        <thead>
          <tr>
            <th>Produto</th>
            <th>
              <Text align="center">Quantidade</Text>
            </th>
            <th>
              <Text align="center">Preço</Text>
            </th>
            <th>
              <Text align="center">Remover</Text>
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <CartItem setItems={setItems} key={item.id} item={item} />
          ))}
        </tbody>

        <thead>
          <tr>
            <th></th>
            <th>
              <Text align="center">{amountTotal}</Text>
            </th>
            <th>
              <Text align="center">{formatMoney(priceTotal)} R$</Text>
            </th>
            <th></th>
          </tr>
        </thead>
      </Table>

      <Box my={30} align="right">
        <Button radius="sm" size="xl" style={{ flex: 1 }}>
          Finalizar Compra
        </Button>
      </Box>
    </ScrollArea>
  );
}
