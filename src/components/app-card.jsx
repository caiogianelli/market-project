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
import { useRouter } from "next/router";

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

export function FeaturesCard({
  image,
  title,
  price,
  type,
  offer,
  id,
  description,
}) {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Link href={`/produtos/${type}/${id}`}>
      <Card withBorder className={classes.card} mt={40}>
        <Card.Section className={classes.imageSection}>
          <Image src={image} alt={image} />
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

            <Button
              radius="xs"
              size="xs"
              style={{ flex: 1 }}
              onClick={(event) => {
                let items = localStorage.getItem("items");

                if (items != null) {
                  items = JSON.parse(items);
                } else {
                  items = [];
                }

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
                let test = items.find((item) => product.id === item.id);
                if (test) {
                  test["amount"] += 1;
                } else {
                  test = product;
                }
                const newItems2 = [test, ...todosOsItensQueNaoEOAtual];

                localStorage.setItem("items", JSON.stringify(newItems2));
                event.preventDefault();
                router.push("/cart");
              }}
            >
              Comprar
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
}
