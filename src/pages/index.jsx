import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { Button, Container, SimpleGrid, Text } from "@mantine/core";
import { getProducts } from "./api/product";
import { CategoryProducts } from "../components/app-card/category-products";
import { useState } from "react";
import { CategoryCarousel } from "../components/category-carousel";
import { IndexCarousel } from "../components/index-carousel";

export default function Home({ products, items, setItems }) {
  const [itemsLimit, setItemsLimit] = useState(4);

  let categories = [];
  products.forEach((bat) => {
    const categoryIndexFound = categories.findIndex((category) => category.name === bat.type);

    if (categoryIndexFound === -1) {
      categories.push({
        name: bat.type,
        images: [bat.image],
      });
    } else {
      categories[categoryIndexFound].images.push(bat.image);
    }
  });

  return (
    <div>
      <HeaderSearch items={items} setItems={setItems} />
      <Container
        size={"xl"}
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <Text align="left" size="35px" weight={600} color="orange">
          Principais Novidades
        </Text>

        <IndexCarousel products={products} items={items} setItems={setItems} />

        <Text align="left" size="28px" weight={600} color="orange" mt={20}>
          Promoções
        </Text>

        <SimpleGrid
          mb={20}
          cols={4}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "md", cols: 3 },
            { maxWidth: "sm", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {products
            .filter((product) => product.offer !== 0)
            .slice(0, itemsLimit)
            .map((product) => (
              <CategoryProducts items={items} setItems={setItems} key={product.id} {...product} />
            ))}
        </SimpleGrid>

        {itemsLimit !== products.length && (
          <Container align="center">
            <Button variant="subtle" align="center" mb={10} onClick={() => setItemsLimit(products.length)}>
              Ver mais
            </Button>
          </Container>
        )}

        <Text align="left" size="28px" weight={600} color="orange" mt={20}>
          Categorias
        </Text>

        <SimpleGrid
          mb={20}
          cols={4}
          breakpoints={[
            { maxWidth: "lg", cols: 4 },
            { maxWidth: "md", cols: 4 },
            { maxWidth: "xs", cols: 2 },
          ]}
        >
          {categories.map((category) => (
            <CategoryCarousel key={category.name} category={category} />
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
