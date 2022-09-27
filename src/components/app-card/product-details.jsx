import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles(() => ({
  card: {
    marginTop: "10px",
    width: "400px",
    maxHeight: "500px",
    align: "center",
  },

  cardTitle: {
    marginTop: "2px",
    textAlign: "left",
    maxHeight: "500px",
    width: "450px",
  },

  imageSection: {
    width: "400px",
  },

  label: {},

  priceBuyContainer: {
    width: "500px",
  },

  icon: {},
}));

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
  const { classes } = useStyles();

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
        { maxWidth: "md", cols: 1 },
        { maxWidth: "xs", cols: 1 },
      ]}
    >
      <Group className={classes.card}>
        <Card withBorder className={classes.card}>
          <Card.Section className={classes.imageSection}>
            <Image src={image} alt={image} />
          </Card.Section>
        </Card>
      </Group>

      <Group className={classes.cardTitle}>
        <div>
          <Text weight={450}>Produto:</Text>
          <Text weight={500}>{title}</Text>
          <Text align="right" size="xs" color="dimmed">
            {type}
          </Text>

          <Text weight={450}>Descrição:</Text>
          <Text weight={300}>{description}</Text>

          <Text
            align="right"
            size={40}
            weight={700}
            sx={{ lineHeight: 1 }}
            mt={70}
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
        <Button radius="sm" size="xl" style={{ flex: 1 }} onClick={addToCart}>
          Comprar
        </Button>
      </Group>
    </SimpleGrid>
  );
}
