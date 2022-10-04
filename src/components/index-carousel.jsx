import { Carousel } from "@mantine/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { ProductsCarousel } from "./app-card/products-carousel";

export function IndexCarousel({ products, items, setItems }) {
  const autoplay = useRef(emblaCarouselAutoplay({ delay: 4000 }));

  return (
    <>
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

                color: theme.colorScheme === "dark" ? theme.white : theme.white,
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
    </>
  );
}
