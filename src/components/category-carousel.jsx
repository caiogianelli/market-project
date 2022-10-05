import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { ProductsImage } from "./app-card/products-image";
import { Text } from "@mantine/core";
import Link from "next/link";

export function CategoryCarousel({ category }) {
  const autoplay = useRef(Autoplay({ delay: 1500 }));

  return (
    <div>
      <Carousel
        key={category.name}
        plugins={[autoplay.current]}
        slideGap="md"
        align="start"
        withControls={false}
        draggable={false}
        loop
        breakpoints={[
          { maxWidth: "lg", slideSize: "100%" },
          { maxWidth: "md", slideSize: "100%" },
          {
            maxWidth: "xs",
            slideSize: "100%",
          },
        ]}
      >
        {category.images.map((image) => (
          <Link href={`/produtos/${category.name}`} key={image}>
            <Carousel.Slide key={image}>
              <ProductsImage image={image} />
            </Carousel.Slide>
          </Link>
        ))}
      </Carousel>
      <Text align="center" size={20}>
        {category.name[0].toUpperCase() + category.name.substring(1)}
      </Text>
    </div>
  );
}
