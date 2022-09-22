import { HeaderSearch } from "../components/header";
import { FooterSocial } from "../components/footer";
import { Container, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { FeaturesCardCarousel } from "../components/app-card-carousel";
import { getProducts } from "./api/product";

export default function Home({ products }) {
  return (
    <div>
      <HeaderSearch />

      {/* <FeaturesCard image={products[0].img} /> */}

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
            styles={{ weight: "50px" }}
            slideGap="md"
            height={420}
            controlSize={40}
            draggable={true}
            align="start"
            slidesToScroll={5}
            loop
            withIndicators
          >
            {products.map((product) => (
              <Carousel.Slide key={product.id} size="20%">
                <FeaturesCardCarousel
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
      </Container>

      <FooterSocial />
    </div>
  );
}

export async function getStaticProps(context) {
  const products = getProducts();

  return {
    // Passed to the page component as props
    props: { products },
  };
}
