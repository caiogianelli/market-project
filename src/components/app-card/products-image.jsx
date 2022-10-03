import { Card, createStyles } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    height: "250px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },

  imageSection: {
    display: "flex",
    height: "200%",
    overflow: "hidden",
    alignItems: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  image: {
    width: "100%",
    minHeight: "270px",
    height: "auto",
    objectFit: "cover",
  },
}));

export function ProductsImage({ image, type }) {
  const { classes } = useStyles();

  return (
    <Card withBorder className={classes.card} mt={13} p={0}>
      <Card.Section className={classes.imageSection}>
        <img className={classes.image} src={image} alt={image} />
      </Card.Section>
    </Card>
  );
}
