import { useState } from "react";
import { Image, Text, Badge, ScrollArea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";

import { Parcel } from "./parcel";
import { formatMoney } from "../../../utils/format-money";

import * as S from "./styles";

export function ProductDetails({ image, title, price, type, offer, id, description, items, setItems }) {
  const [minImage, setMinImage] = useState(image[0]);

  function addToCart() {
    let product = {
      image,
      title,
      price,
      type,
      offer,
      id,
      description,
      amount: 1,
    };
    const todosOsItensQueNaoEOAtual = items.filter((item) => product.id !== item.id);
    let newProductInCart = items.find((item) => product.id === item.id);
    if (newProductInCart) {
      newProductInCart["amount"] += 1;
    } else {
      newProductInCart = product;
    }
    const newItems = [newProductInCart, ...todosOsItensQueNaoEOAtual];

    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  }

  return (
    <S.Grid
      cols={2}
      breakpoints={[
        { maxWidth: "lg", cols: 2 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "sm", cols: 1 },
        { maxWidth: "xs", cols: 1 },
      ]}
    >
      <S.Card>
        <S.Image>{<Image src={minImage} alt={minImage} />}</S.Image>
        {image.length > 1 ? (
          <S.Group>
            {image.map((img) => (
              <S.Btn onClick={() => setMinImage(img)} key={img}>
                <S.Img src={img} alt={img} />
              </S.Btn>
            ))}
          </S.Group>
        ) : (
          <></>
        )}
      </S.Card>

      <S.Title>
        <div>
          <Text weight={500} size={18}>
            Produto:
          </Text>

          <Text weight={480} size={18}>
            {title}
          </Text>

          <Text align="left" size="xs" color="dimmed" mb={20}>
            {type}
          </Text>

          <Text weight={500} size={18}>
            Descrição:
          </Text>
          <ScrollArea
            style={{ height: 170 }}
            styles={(theme) => ({
              scrollbar: {
                '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
                  backgroundColor: theme.colors.orange[6],
                },
              },
            })}
            scrollbarSize={5}
            scrollHideDelay={500}
            color="orange"
          >
            <Text
              sx={{
                paddingRight: "15px",
              }}
              weight={300}
            >
              {description}
            </Text>
          </ScrollArea>

          <Text align="right" mt={50}>
            {offer != 0 && (
              <Badge variant="outline" p={"0 5px"}>
                {offer} % OFF
              </Badge>
            )}
          </Text>

          <Text align="right" size={40} weight={700} sx={{ lineHeight: 1 }} mt={10}>
            R$ {formatMoney(price)}
          </Text>

          <Parcel price={price} />
        </div>

        <S.Button
          onClick={() => {
            showNotification({
              icon: <IconCheck />,
              title: "Produto adicionado ao carrinho",
            });
            addToCart();
          }}
        >
          Adicionar
          {<IconShoppingCartPlus style={{ marginLeft: "10px" }} />}
        </S.Button>
      </S.Title>
    </S.Grid>
  );
}
