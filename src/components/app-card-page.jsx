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
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
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

export function FeaturesCardPage({
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
          <Button
            radius="sm"
            size="xl"
            style={{ flex: 1 }}
            onClick={(event) => {
              // passo 1
              // pegar items do localstorage (declarar como let)
              let items = localStorage.getItem("items");

              // passo 2
              // checar se existem items no localstorage,
              //  se existir transformar o valor do localstorage (que é armazenado em string) em array usando o JSON.parse
              //  caso contrario usar um array vazio como default
              if (items != null) {
                items = JSON.parse(items);
              } else {
                items = [];
              }

              // passo 3
              // declarar o produto (ignorar se o produto já existir no carrinho)
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

              // passo 4
              // checar se o item existe no carrinho
              // se existir aumentar a quantidade
              // caso contrario adicionar item no carrinho

              const todosOsItensQueNaoEOAtual = items.filter(
                (item) => product.id !== item.id
              );
              let test = items.find((item) => product.id === item.id);
              if (test) {
                test["amount"] += 1;
              } else {
                test = product;
              }
              // const newItems = [test].concat(todosOsItensQueNaoEOAtual);
              const newItems2 = [test, ...todosOsItensQueNaoEOAtual];

              // let itemAlreadyExist = false;
              // for (const item of items) {
              //   if (product.id == item.id) {
              //     item["amount"] += 1;
              //     itemAlreadyExist = true;
              //     break;
              //   }
              // }

              // if (!itemAlreadyExist) {
              //   items.push(product);
              // }
              // console.log("items", items);

              // passo 5
              // atualizar o valor items do localstorage com o novo items que conterá o novo item juntamente
              //  aos items anteriores (caso existam)
              localStorage.setItem("items", JSON.stringify(newItems2));
              event.preventDefault();
              router.push("/cart");
            }}
          >
            Comprar
          </Button>
        </Group>
      </SimpleGrid>
    </Link>
  );
}
