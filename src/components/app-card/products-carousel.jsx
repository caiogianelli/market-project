import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  Tooltip,
} from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    height: "360px",
    cursor: "pointer",
  },

  cardTitle: {
    alignItems: "baseline",
    minHeight: "30px",
    maxHeight: "60px",
  },

  imageSection: {
    display: "flex",
    height: "200px",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  priceBuyContainer: {
    padding: theme.spacing.sm,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    height: "50px",
    gap: "4px",
    display: "flex",
    justifyContent: "space-around",
  },
  buttonPrice: {
    borderRadius: "4px",
    minWidth: "80px",
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function ProductsCarousel({
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
    <Card withBorder className={classes.card} mt={13}>
      <Link href={`/produtos/${type}/${id}`}>
        <Card.Section className={classes.imageSection}>
          <Image src={image} alt={image} />
        </Card.Section>
      </Link>

      <Group className={classes.cardTitle} position="apart" my="md">
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
      </Group>

      <Card.Section className={classes.priceBuyContainer}>
        <Group spacing={10} mb={10}>
          <div>
            <Text size="18px" weight={600} sx={{ lineHeight: 1 }}>
              R$ {price.toFixed(2).toString().replace(".", ",")}
            </Text>

            {offer != 0 && (
              <Badge variant="outline" p={"0 5px"}>
                {offer} % OFF
              </Badge>
            )}
          </div>

          <Button className={classes.buttonPrice} onClick={addToCart}>
            Adicionar
            {<IconShoppingCartPlus style={{ marginLeft: "10px" }} />}{" "}
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
