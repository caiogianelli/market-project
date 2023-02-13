// vendors
import { Image, Text, Badge, Tooltip } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons";
import Link from "next/link";

// components
import { formatMoney } from "../../../utils/format-money";

// styles
import * as S from './styles'

export function CategoryProducts({ image, title, price, type, offer, id, description, items, setItems }) {
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
    <S.StyledCard withBorder>
      <S.StyledImageSection>
        <Link href={`/produtos/${type}/${id}`}>
          <Image src={image[0]} alt={image[0]} />
        </Link>
      </S.StyledImageSection>

      <S.StyledCardTitle>
        <div>
          <Tooltip
            multiline
            transitionDuration={200}
            transition="fade"
            label={title}
            color="orange"
            withArrow
          >
            <Text lineClamp={1} weight={500}>
              {title}
            </Text>
          </Tooltip>

          <Text size="xs" color="dimmed">
            {type}
          </Text>
        </div>
      </S.StyledCardTitle>

      <S.StyledPriceContainer>
        <div>
          <Text size="xl" weight={500} sx={{ lineHeight: 1 }}>
            R$ {formatMoney(price)}
          </Text>
        </div>
        <div>{offer != 0 && <Badge variant="outline">{offer} % OFF</Badge>}</div>
      </S.StyledPriceContainer>

      <S.StyledPriceContainer>
        <S.StyledButton
          onClick={() => {
            showNotification({
              icon: <IconCheck />,
              title: "Produto adicionado ao carrinho",
            });
            addToCart();
          }}
        >
          Adicionar
          {<IconShoppingCartPlus size={18} style={{ marginLeft: "10px" }} />}
        </S.StyledButton>
      </S.StyledPriceContainer>
    </S.StyledCard>
  );
}
