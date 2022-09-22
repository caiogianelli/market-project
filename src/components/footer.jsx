import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 0,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size={12}>Desenvolvido por Caio Gianelli</Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            component="a"
            target="_blank"
            size="lg"
            href="https://www.linkedin.com/in/caiogianelli/"
          >
            <IconBrandLinkedin size={18} stroke={1.5} href="" />
          </ActionIcon>
          <ActionIcon
            component="a"
            target="_blank"
            size="lg"
            href="https://github.com/caiogianelli"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
