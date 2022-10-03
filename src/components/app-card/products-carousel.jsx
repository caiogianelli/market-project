import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Tooltip,
} from "@mantine/core";

import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    height: "350px",
    cursor: "pointer",
  },

  cardTitle: {
    alignContent: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "10px",
    marginRight: "10px",
    minHeight: "20px",
    maxHeight: "30px",
  },

  imageSection: {
    display: "flex",
    height: "250px",
    overflow: "hidden",
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

    display: "flex",
    justifyContent: "space-between",
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

  return (
    <Card withBorder className={classes.card} mt={13} p={0}>
      <Link href={`/produtos/${type}/${id}`}>
        <Card.Section className={classes.imageSection}>
          <Image src={image} alt={image} />
        </Card.Section>
      </Link>

      <Group className={classes.cardTitle} my={10}>
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
      </Card.Section>
    </Card>
  );
}
