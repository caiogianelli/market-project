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
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    cursor: "pointer",
  },

  cardTitle: {
    alignItems: "flex-start",
    height: "35px",
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
    height: "70px",
    display: "flex",
    justifyContent: "space-around",
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function CategoryProducts({
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
    <Card withBorder className={classes.card} mt={40}>
      <Card.Section className={classes.imageSection}>
        <Link href={`/produtos/${type}/${id}`}>
          <Image src={image} alt={image} />
        </Link>
      </Card.Section>

      <Group className={classes.cardTitle} position="apart" my="md">
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
      </Group>

      <Card.Section className={classes.priceBuyContainer}>
        <Group spacing={15} mx={1}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              R${price.toFixed(2).toString().replace(".", ",")}
            </Text>

            {offer != 0 && (
              <Badge variant="outline" p={"0 5px"}>
                {offer} % OFF
              </Badge>
            )}
          </div>

          <Button radius="xs" size="xs" style={{ flex: 1 }} onClick={addToCart}>
            Comprar
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
