import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { Button, Container, SimpleGrid, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ProductsCarousel } from "../components/app-card/products-carousel";
import { getProducts } from "./api/product";
import { CategoryProducts } from "../components/app-card/category-products";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { CategoryCarousel } from "../components/category-carousel";

export default function Home({ products, items, setItems }) {
  const [itemsLimit, setItemsLimit] = useState(4);
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  let categories = [];
  products.forEach((bat) => {
    const categoryIndexFound = categories.findIndex(
      (category) => category.name === bat.type
    );

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

        {products.length > 0 && (
          <Carousel
            plugins={[autoplay.current]}
            styles={(theme) => (
              { weight: "50px" },
              {
                indicator: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.white
                      : theme.colors.dark[7],
                },

                control: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[4]
                      : theme.colors.dark[2],

                  color:
                    theme.colorScheme === "dark" ? theme.white : theme.white,
                },
              }
            )}
            slideGap="md"
            height={400}
            controlSize={40}
            draggable={true}
            align="start"
            slidesToScroll={1}
            loop
            withIndicators
            breakpoints={[
              { maxWidth: "lg", slideSize: "33%" },
              { maxWidth: "md", slideSize: "50%" },
              {
                maxWidth: "xs",
                slideSize: "100%",
              },
            ]}
          >
            {products.slice(0, 10).map((product) => (
              <Carousel.Slide key={product.id} size="25%">
                <ProductsCarousel
                  items={items}
                  setItems={setItems}
                  {...product}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
        <Text align="left" size="28px" weight={600} color="orange" mt={20}>
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
            .slice(0, itemsLimit)
            .map((product) => (
              <CategoryProducts
                items={items}
                setItems={setItems}
                key={product.id}
                {...product}
              />
            ))}
        </SimpleGrid>

        {itemsLimit !== products.length && (
          <Container align="center">
            <Button
              variant="subtle"
              align="center"
              mb={10}
              onClick={() => setItemsLimit(products.length)}
            >
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
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "md", cols: 2 },
            { maxWidth: "xs", cols: 1 },
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
