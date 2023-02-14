// vendors
import { Text } from "@mantine/core";

// components
import { formatMoney } from "../../../utils/format-money";

export function Parcel({ price }) {
  let parce = 0;
  if (price > 500) {
    parce = price / 5;

    return (
      <Text align="right" size={20} weight={500} sx={{ lineHeight: 1 }} mt={10}>
        5x de R$ {formatMoney(parce)}
      </Text>
    );
  }
  if (price > 100) {
    parce = price / 2;

    return (
      <Text align="right" size={20} weight={500} sx={{ lineHeight: 1 }} mt={10}>
        2x de R$ {formatMoney(parce)}
      </Text>
    );
  }
}
