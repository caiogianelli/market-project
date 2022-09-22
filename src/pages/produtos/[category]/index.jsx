import { Container, SimpleGrid, Text } from "@mantine/core";
import { FeaturesCard } from "../../../components/app-card";
import { FooterSocial } from "../../../components/footer";
import { HeaderSearch } from "../../../components/header";
import { getAllCategories, getCategoryProducts } from "../../api/product";

const Category = ({ products }) => {
  return (
    <div>
      <HeaderSearch />

      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <Text size={40} mt={20} weight={700} color=""></Text>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: "lg", cols: 3 },
            { maxWidth: "md", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {products.map((product) => (
            <FeaturesCard
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
};

export async function getStaticPaths() {
  const categories = getAllCategories();
  const paths = categories.map((category) => {
    return {
      params: { category: `${category}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const type = context.params.category;
  console.log(type);
  const products = getCategoryProducts(type);
  console.log(products);
  return {
    props: { products, type },
  };
}

export default Category;
