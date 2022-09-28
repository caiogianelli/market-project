import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { Container, SimpleGrid, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ProductsCarousel } from "../components/app-card/products-carousel";
import { getProducts } from "./api/product";
import { CategoryProducts } from "../components/app-card/category-products";

export default function Home({ products, items, setItems }) {
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
            styles={(theme) => (
              { weight: "50px" },
              {
                indicator: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.white
                      : theme.colors.dark[7],
                },
                controls: {
                  right: "-12px",
                  left: "-12px",
                  top: "0%",
                },
                control: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[4]
                      : theme.colors.dark[2],

                  color:
                    theme.colorScheme === "dark" ? theme.white : theme.white,
                  height: "400px",
                  borderRadius: "3px",
                  minWidth: "18px",
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
            {products.map((product) => (
              <Carousel.Slide key={product.id} size="25%">
                <ProductsCarousel
                  items={items}
                  setItems={setItems}
                  id={product.id}
                  image={product.img}
                  title={product.name}
                  price={product.price}
                  type={product.type}
                  offer={product.offer}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
        <Text align="left" size="35px" weight={600} color="orange" mt={20}>
          Promoções
        </Text>
        <SimpleGrid
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
                id={product.id}
                image={product.img}
                title={product.name}
                price={product.price}
                type={product.type}
                offer={product.offer}
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
