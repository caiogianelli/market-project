import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { Container, SimpleGrid, Text } from "@mantine/core";
import { getProducts } from "./api/product";
import { CategoryProducts } from "../components/app-card/category-products";

export default function Home({ products, items, setItems }) {
  return (
    <div>
      <HeaderSearch items={items} setItems={setItems} />
      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <Text align="left" size="35px" weight={600} color="orange" mt={20}>
          Promoções
        </Text>
        <SimpleGrid
          mb={20}
          cols={4}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "md", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {products
            .filter((product) => product.offer !== 0)
            .map((product) => (
              <CategoryProducts
                items={items}
                setItems={setItems}
                size="100%"
                key={product.id}
                {...product}
              />
            ))}
        </SimpleGrid>
      </Container>

      <FooterSocial />
    </div>
  );
}

export async function getStaticProps() {
  const products = getProducts();

  return {
    props: { products },
  };
}
