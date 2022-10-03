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
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    cursor: "pointer",
    height: "340px",
  },

  cardTitle: {
    alignItems: "flex-start",
    height: "30px",
    display: "inline-table",
    marginTop: "5px",
    marginBottom: "5px",
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
    padding: "8px",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    height: "35px",
    marginBottom: "5px",
    gap: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPrice: {
    borderRadius: "4px",
    width: "100%",
    height: "35px",
    paddingLeft: "45px",
    paddingRight: "45px",
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

      <Group className={classes.cardTitle}>
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
        <div>
          <Text size="xl" weight={500} sx={{ lineHeight: 1 }}>
            R$ {price.toFixed(2).toString().replace(".", ",")}
          </Text>
        </div>
        <div>
          {offer != 0 && <Badge variant="outline">{offer} % OFF</Badge>}
        </div>
      </Card.Section>

      <Card.Section className={classes.priceBuyContainer}>
        <Button
          className={classes.buttonPrice}
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
        </Button>
      </Card.Section>
    </Card>
  );
}
