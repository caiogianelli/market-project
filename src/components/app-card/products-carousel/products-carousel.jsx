// vendors
import { Image, Text, Group, Badge, Tooltip } from "@mantine/core";
import Link from "next/link";

// components
import { formatMoney } from "../../../utils/format-money";

// style
import * as S from "./styles"

export function ProductsCarousel({ image, title, price, type, offer, id }) {
  return (
    <S.Card withBorder p={0}>
      <Link href={`/produtos/${type}/${id}`}>
        <S.Image>
          <Image src={image[0]} alt={image[0]} />
        </S.Image>
      </Link>

      <S.Title>
        <div>
          <Tooltip label={title} color="orange" withArrow multiline>
            <Text lineClamp={1} weight={500} size="lg">
              {title}
            </Text>
          </Tooltip>
          <Text size="xs" color="orange">
            {type}
          </Text>
        </div>
      </S.Title>

      <S.Price>
        <Group>
          <div>
            <Text size="22px" weight={600} sx={{ lineHeight: 1 }}>
              R$ {formatMoney(price)}
            </Text>
          </div>

          <div>
            {offer != 0 && (
              <Badge variant="outline" p={"0 5px"}>
                {offer} % OFF
              </Badge>
            )}
          </div>
        </Group>
      </S.Price>
    </S.Card>
  );
}
