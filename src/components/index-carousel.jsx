// vendors
import { Carousel } from "@mantine/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// components
import { ProductsCarousel } from "./app-card/products-carousel/products-carousel";

export function IndexCarousel({ products, items, setItems }) {
  const autoplay = useRef(emblaCarouselAutoplay({ delay: 4000 }));

  return (
    <>
      {products.length > 0 && (
        <Carousel
          plugins={[autoplay.current]}
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
            { maxWidth: "xs", slideSize: "100%" },
          ]}
        >
          {products.slice(0, 10).map((product) => (
            <Carousel.Slide key={product.id} size="25%">
              <ProductsCarousel items={items} setItems={setItems} {...product} />
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </>
  );
}
