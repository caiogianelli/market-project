import { Container, Text } from "@mantine/core";
import { ProductDetails } from "../../../../components/app-card/product-details";
import { FooterSocial } from "../../../../components/footer";
import { HeaderSearch } from "../../../../components/header";
import { getProduct, getProducts } from "../../../api/product";

const ProductId = ({ products, type, id, items, setItems }) => {
  return (
    <div>
      <HeaderSearch items={items} setItems={setItems} />

      <Container
        style={{
          minHeight: "calc(100vh - 70px - 70px)",
        }}
      >
        <Text size={25} mt={20} weight={600} color="orange">
          {products[0].title}
        </Text>

        {products
          .filter((product) => product.type === type && product.id === id)
          .map((product) => (
            <ProductDetails
              items={items}
              setItems={setItems}
              size="100%"
              key={product.id}
              {...product}
            />
          ))}
      </Container>
      <FooterSocial />
    </div>
  );
};

export async function getStaticPaths() {
  const products = getProducts();
  const paths = products.map((product) => {
    return {
      params: { category: `${product.type}`, productId: `${product.id}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const type = context.params.category;
  const id = Number(context.params.productId);
  const products = getProduct(type, id);
  return {
    props: { products, type, id },
  };
}

export default ProductId;
